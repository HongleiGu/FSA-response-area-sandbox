import type { FSA, FSAFeedback } from "./type";
import { ValidationError } from "./type";

/* ===========================
   Internal helper types
=========================== */

type MutableFeedback = Pick<FSAFeedback, "errors" | "warnings">;

type OutgoingMap = Map<string, Array<{ symbol: string; to: string }>>;

// TODO: Consider moving basic validation checks to the evaluation function
//       so that multiple evaluation functions can share validation logic
//       on the backend rather than duplicating it in the response area.

/* ===========================
   Basic validation checks
=========================== */

const checkStates = (
  states: string[],
  feedback: MutableFeedback
): boolean => {
  if (states.length === 0) {
    feedback.errors.push({
      message: "The automaton has no states.",
      code: "EMPTY_STATES",
      severity: "error",
    });
    return false;
  }
  return true;
};

const checkAlphabet = (
  alphabet: string[],
  feedback: MutableFeedback
): boolean => {
  if (alphabet.length === 0) {
    feedback.errors.push({
      message: "The automaton has no alphabet symbols.",
      code: "EMPTY_ALPHABET",
      severity: "error",
    });
    return false;
  }
  return true;
};

const checkInitialState = (
  initial_state: string,
  states: string[],
  feedback: MutableFeedback
): boolean => {
  if (!states.includes(initial_state)) {
    feedback.errors.push({
      message: `Initial state "${initial_state}" is not a valid state.`,
      code: "INVALID_INITIAL",
      severity: "error",
      highlight: {
        type: "initial_state",
        state_id: initial_state,
      },
    });
    return false;
  }
  return true;
};

const checkAcceptStates = (
  accept_states: string[],
  states: string[],
  feedback: MutableFeedback
): boolean => {
  let ok = true;

  for (const s of accept_states) {
    if (!states.includes(s)) {
      ok = false;
      feedback.errors.push({
        message: `Accept state "${s}" is not a valid state.`,
        code: "INVALID_ACCEPT",
        severity: "error",
        highlight: {
          type: "accept_state",
          state_id: s,
        },
      });
    }
  }

  return ok;
};

const checkTransitions = (
  transitions: string[],
  states: string[],
  alphabet: string[],
  feedback: MutableFeedback
): OutgoingMap => {
  const outgoing: OutgoingMap = new Map();

  for (const t of transitions) {
    const parts = t.split("|");

    // Cannot safely highlight: transition not parseable
    if (parts.length !== 3) {
      feedback.errors.push({
        message: `Invalid transition format "${t}".`,
        code: "INVALID_TRANSITION_SYMBOL",
        severity: "error",
      });
      continue;
    }

    const [from, symbol, to] = parts;

    // Still not safely highlightable
    if (!from || !symbol || !to) {
      feedback.errors.push({
        message: `Transition unrecognisable "${t}".`,
        code: "INVALID_SYMBOL",
        severity: "error",
      } as ValidationError);
      continue;
    }

    if (!states.includes(from)) {
      feedback.errors.push({
        message: `Transition source "${from}" is invalid.`,
        code: "INVALID_TRANSITION_SOURCE",
        severity: "error",
        highlight: {
          type: "transition",
          from_state: from,
          to_state: to,
          symbol,
        },
      });
    }

    if (!states.includes(to)) {
      feedback.errors.push({
        message: `Transition destination "${to}" is invalid.`,
        code: "INVALID_TRANSITION_DEST",
        severity: "error",
        highlight: {
          type: "transition",
          from_state: from,
          to_state: to,
          symbol,
        },
      });
    }

    if (!alphabet.includes(symbol)) {
      feedback.errors.push({
        message: `Transition symbol "${symbol}" is invalid.`,
        code: "INVALID_TRANSITION_SYMBOL",
        severity: "error",
        highlight: {
          type: "alphabet_symbol",
          symbol,
        },
      });
    }

    if (!outgoing.has(from)) outgoing.set(from, []);
    outgoing.get(from)!.push({ symbol, to });
  }

  return outgoing;
};

// TODO: Structural computations (determinism, completeness, reachability,
//       dead-state analysis) should ideally live in the evaluation function
//       so the response area stays a thin presentation layer.

/* ===========================
   Structural computations
=========================== */

const computeDeterminism = (outgoing: OutgoingMap): boolean => {
  for (const edges of outgoing.values()) {
    const seen = new Set<string>();
    for (const { symbol } of edges) {
      if (seen.has(symbol)) return false;
      seen.add(symbol);
    }
  }
  return true;
};

const computeCompleteness = (
  states: string[],
  alphabet: string[],
  outgoing: OutgoingMap
): boolean => {
  for (const state of states) {
    const edges = outgoing.get(state) ?? [];
    const covered = new Set(edges.map(e => e.symbol));

    for (const sym of alphabet) {
      if (!covered.has(sym)) return false;
    }
  }
  return true;
};

const computeReachableStates = (
  initial_state: string,
  states: string[],
  outgoing: OutgoingMap
): Set<string> => {
  const reachable = new Set<string>();
  const stack: string[] = [];

  if (states.includes(initial_state)) {
    reachable.add(initial_state);
    stack.push(initial_state);
  }

  while (stack.length) {
    const s = stack.pop()!;
    for (const { to } of outgoing.get(s) ?? []) {
      if (!reachable.has(to)) {
        reachable.add(to);
        stack.push(to);
      }
    }
  }

  return reachable;
};

const computeDeadStates = (
  states: string[],
  accept_states: string[],
  outgoing: OutgoingMap
): string[] => {
  const reverse = new Map<string, string[]>();

  for (const [from, edges] of outgoing) {
    for (const { to } of edges) {
      if (!reverse.has(to)) reverse.set(to, []);
      reverse.get(to)!.push(from);
    }
  }

  const canReachAccept = new Set<string>(accept_states);
  const queue = [...accept_states];

  while (queue.length) {
    const s = queue.shift()!;
    for (const p of reverse.get(s) ?? []) {
      if (!canReachAccept.has(p)) {
        canReachAccept.add(p);
        queue.push(p);
      }
    }
  }

  return states.filter(
    s => !canReachAccept.has(s) && !accept_states.includes(s)
  );
};

/* ===========================
   Public API
=========================== */

export const validateFSA = (fsa: FSA | null): FSAFeedback => {
  const feedback: FSAFeedback = {
    summary: "",
    errors: [],
    warnings: [],
    test_results: [],
    hints: [],
  };

  if (!fsa) {
    feedback.errors.push({
      message: "No automaton provided.",
      code: "EVALUATION_ERROR",
      severity: "error",
    });
    return feedback;
  }

  const { states, alphabet, transitions, initial_state, accept_states } = fsa;

  const statesOk = checkStates(states, feedback);
  const alphabetOk = checkAlphabet(alphabet, feedback);
  const initialOk = checkInitialState(initial_state, states, feedback);
  const acceptOk = checkAcceptStates(accept_states, states, feedback);

  const outgoing = checkTransitions(
    transitions,
    states,
    alphabet,
    feedback
  );

  const is_deterministic = computeDeterminism(outgoing);
  const is_complete = computeCompleteness(states, alphabet, outgoing);

  const reachable = computeReachableStates(
    initial_state,
    states,
    outgoing
  );
  const unreachable_states = states.filter(s => !reachable.has(s));

  const dead_states = computeDeadStates(
    states,
    accept_states,
    outgoing
  );

  feedback.structural = {
    is_deterministic,
    is_complete,
    num_states: states.length,
    num_transitions: transitions.length,
    unreachable_states,
    dead_states,
  };

  const isValid =
    statesOk &&
    alphabetOk &&
    initialOk &&
    acceptOk &&
    feedback.errors.length === 0;

  feedback.summary = isValid
    ? "The automaton is a valid finite-state automaton."
    : "The automaton is not a valid finite-state automaton.";

  return feedback;
};
