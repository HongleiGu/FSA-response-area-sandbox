# FSA Response Area: Test Guide

This guide is for testing the **FSA** response area only.

## Scope

- Covers local preview validation (`validateFSA`) and UI behavior in the FSA editor.
- Does **not** assume backend language-equivalence grading is available.

## Run Locally

1. Install deps:

   ```bash
   yarn
   ```

2. Start sandbox:

   ```bash
   yarn dev
   ```

   If you only want to iterate in the local Vite mode, use:

   ```bash
   yarn dev:fsa
   ```

3. In Lambda Feedback sandbox settings, point to your local URL and ensure response type is `FSA`.

## Quick Manual Test Flow

1. Open/create an item with FSA response area.
2. In the editor, click `+ Add State` to create states.
3. Select a state to toggle `Initial State` and `Accepting State`.
4. Create transitions by either:
   - clicking `✏️ Enable Draw Mode` and drawing from one state to another, or
   - selecting an edge and editing `Transition Symbol`.
5. Watch the feedback panel in real time.

Expected generic behavior:

- Invalid automata show `Preview Errors` and summary: `The automaton is not a valid finite-state automaton.`
- Valid automata clear preview errors and show summary: `The automaton is a valid finite-state automaton.`
- If errors include highlights, the matching node/edge is marked in red.

## Example Questions and Expected Responses

Use these prompts while testing the UI.

### Q1. “Build a DFA over `{a,b}` that accepts strings ending in `a`.”

Suggested student automaton:

- States: `q0`, `q1`
- Initial: `q0`
- Accept: `q1`
- Transitions:
  - `q0|a|q1`
  - `q0|b|q0`
  - `q1|a|q1`
  - `q1|b|q0`

Expected response:

- No preview errors.
- Summary is valid.
- Structural section should report deterministic = Yes and complete = Yes.

### Q2. “Create any FSA with at least one transition, but forget to set an initial state.”

Suggested student automaton:

- States: `q0`
- Initial: *(unset / empty)*
- Accept: `q0`
- Transition: `q0|a|q0`

Expected response:

- Error code `INVALID_INITIAL`.
- Message similar to: `Initial state "" is not a valid state.`
- Summary is invalid.

### Q3. “Create a machine where one transition uses a symbol not in the alphabet.”

How to trigger:

1. Create two states (`q0`, `q1`) and transition `q0 -> q1`.
2. Set edge label to `z`.
3. Ensure no other edge uses `z`, then edit state/edge data so alphabet effectively excludes intended symbol set (or create malformed transition data in saved answer payload).

Expected response:

- Error code `INVALID_TRANSITION_SYMBOL` for out-of-alphabet symbols.
- Transition/alphabet symbol highlighting appears in red.

> Note: In normal UI flow, alphabet is derived from edge labels. This means this case is easiest to reproduce with malformed persisted data rather than pure UI actions.

### Q4. “Create an automaton with an unreachable state.”

Suggested student automaton:

- States: `q0`, `q1`, `q2`
- Initial: `q0`
- Accept: `q1`
- Transitions:
  - `q0|a|q1`
  - `q1|a|q1`
  - *(no transitions from/to `q2`)*

Expected response:

- May still be valid (no structural error required).
- Structural section lists `q2` under `Unreachable states`.

### Q5. “Create two outgoing transitions from the same state with the same symbol.”

Suggested student automaton:

- States: `q0`, `q1`, `q2`
- Initial: `q0`
- Accept: `q1`
- Transitions:
  - `q0|a|q1`
  - `q0|a|q2`

Expected response:

- No hard preview error from local validator for nondeterminism.
- Structural section shows deterministic = No.

## Regression Checklist

- `Preview Errors` appears only when local validation has errors.
- Error count and error text update immediately after editing states/edges.
- Deleting selected node/edge updates feedback and structural metrics.
- `Fit to Screen` and draw mode toggling do not corrupt answer state.
- Initial/accept visual styles remain correct after edits.

## Known Notes

- Local preview validation is structural/syntactic and does not perform full language-equivalence checking.
- Some error types are easier to reproduce via malformed saved payloads than through normal UI controls.