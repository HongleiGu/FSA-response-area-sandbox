// this is kind of the compromise for the zod restricts IModularResponseSchema and the backend python schema cannot match that
// see file externals/modules/shared/schemas/question-form.schema.ts for details
// since that is a external module, we should not edit that file

import { z } from 'zod';

export const fsaAnswerSchema = z.object({
  states: z.array(z.string()),
  alphabet: z.array(z.string()),
  // Flattened: Array of "from|symbol|to" strings
  transitions: z.array(z.string()), 
  initial_state: z.string(),
  accept_states: z.array(z.string()),
  config: z.string()
});

export type FSA = z.infer<typeof fsaAnswerSchema>;

export const fsaConfigSchema = z.object({
  evaluation_mode: z.enum(['strict', 'lenient', 'partial']).optional(),
  expected_type: z.enum(['DFA', 'NFA', 'any']).optional(),
  feedback_verbosity: z.enum(['minimal', 'standard', 'detailed']).optional(),

  check_minimality: z.boolean().optional(),
  check_completeness: z.boolean().optional(),

  highlight_errors: z.boolean().optional(),
})

export type FSAConfig = z.infer<typeof fsaConfigSchema>

export const DEFAULT_FSA_CONFIG: FSAConfig =  {
  evaluation_mode: "lenient",
  expected_type: "any",
  feedback_verbosity: "standard",

  check_minimality: false,
  check_completeness: false,

  highlight_errors: true
}

/* ===========================
   Error codes
=========================== */

export const ErrorCodeSchema = z.enum([
  "INVALID_STATE",
  "INVALID_INITIAL",
  "INVALID_ACCEPT",
  "INVALID_SYMBOL",

  "INVALID_TRANSITION_SOURCE",
  "INVALID_TRANSITION_DEST",
  "INVALID_TRANSITION_SYMBOL",
  "MISSING_TRANSITION",
  "DUPLICATE_TRANSITION",

  "UNREACHABLE_STATE",
  "DEAD_STATE",

  "WRONG_AUTOMATON_TYPE",
  "NOT_DETERMINISTIC",
  "NOT_COMPLETE",
  "NOT_MINIMAL",

  "LANGUAGE_MISMATCH",
  "TEST_CASE_FAILED",

  "EMPTY_STATES",
  "EMPTY_ALPHABET",
  "EVALUATION_ERROR",
]);

/* ===========================
   Element highlighting
=========================== */

export const ElementHighlightTypeSchema = z.enum([
  "state",
  "transition",
  "initial_state",
  "accept_state",
  "alphabet_symbol",
]);
export const ElementHighlightSchema = z.object({
  type: ElementHighlightTypeSchema,
  state_id: z.string().nullable().optional(),
  from_state: z.string().nullable().optional(),
  to_state: z.string().nullable().optional(),
  symbol: z.string().nullable().optional(),
});


/* ===========================
   Validation errors
=========================== */

export const ValidationSeveritySchema = z.enum([
  "error",
  "warning",
  "info",
]);

export const ValidationErrorSchema = z.object({
  message: z.string(),
  code: ErrorCodeSchema,
  severity: ValidationSeveritySchema.default("error"),
  highlight: ElementHighlightSchema.nullable().optional(),
  suggestion: z.string().nullable().optional(),
});

/* ===========================
   Test results
=========================== */

export const TestResultSchema = z.object({
  input: z.string(),
  expected: z.boolean(),
  actual: z.boolean(),
  passed: z.boolean(),
  trace: z.array(z.string()).optional(),
});

/* ===========================
   Structural analysis
=========================== */

export const StructuralInfoSchema = z.object({
  is_deterministic: z.boolean(),
  is_complete: z.boolean(),

  num_states: z.number().int().min(0),
  num_transitions: z.number().int().min(0),

  unreachable_states: z.array(z.string()).default([]),
  dead_states: z.array(z.string()).default([]),
});

/* ===========================
   Language comparison
=========================== */

export const CounterexampleTypeSchema = z.enum([
  "should_accept",
  "should_reject",
]);

export const LanguageComparisonSchema = z.object({
  are_equivalent: z.boolean(),
  counterexample: z.string().nullable().optional(),
  counterexample_type: CounterexampleTypeSchema.nullable().optional(),
});

/* ===========================
   Top-level feedback
=========================== */

export const FSAFeedbackSchema = z.object({
  summary: z.string().default(""),

  errors: z.array(ValidationErrorSchema).default([]),
  warnings: z.array(ValidationErrorSchema).default([]),

  structural: StructuralInfoSchema.optional(),
  language: LanguageComparisonSchema.optional(),

  test_results: z.array(TestResultSchema).default([]),
  hints: z.array(z.string()).default([]),
});

export type ErrorCode = z.infer<typeof ErrorCodeSchema>;
export type ElementHighlight = z.infer<typeof ElementHighlightSchema>;
export type ValidationError = z.infer<typeof ValidationErrorSchema>;
export type TestResult = z.infer<typeof TestResultSchema>;
export type StructuralInfo = z.infer<typeof StructuralInfoSchema>;
export type LanguageComparison = z.infer<typeof LanguageComparisonSchema>;
export type FSAFeedback = z.infer<typeof FSAFeedbackSchema>;

export enum CheckPhase {
  Idle = 'IDLE',
  PreviewError = 'PREVIEW_ERROR',
  Evaluating = 'EVALUATING', // we never have access to the api call, so this is useless
  Evaluated = 'EVALUATED',
}

export const defaultFSA: FSA = {
  states: [],
  alphabet: [],
  transitions: [],
  initial_state: '',
  accept_states: [],
  config: JSON.stringify(DEFAULT_FSA_CONFIG)
};