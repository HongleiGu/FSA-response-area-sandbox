Here is a polished **README-style** version, structured for a repository:

---

# FSA Editor Module

A visual **Finite State Automata (FSA)** editor built for structured educational workflows.

This module provides:

* An interactive graph-based automaton editor
* A flattened frontend schema compatible with strict JSON validation
* Backend conversion support for structured automata processing
* Integrated evaluation and feedback support via the wizard system

---

# Overview

The FSA Editor bridges:

* A **flattened TypeScript/Zod frontend representation**
* A **nested backend automaton model**

It enables users to construct automata visually while maintaining strict schema compatibility.

---

# 1. Core Data Structures

## Frontend Schema (`FSA`)

To satisfy the two-level nesting restriction enforced by `jsonNestedSchema`, transitions are stored as flattened strings.

```ts
export interface FSA {
  states: string[];
  alphabet: string[];
  transitions: string[]; // "from_state|symbol|to_state"
  initial_state: string;
  accept_states: string[];
}
```

### Transition Encoding

Transitions use a pipe-separated format:

```
"from_state|symbol|to_state"
```

This guarantees compatibility with frontend validation.

This type will be expanded in the backend with pydantic validation

---

# 2. Editor Operations

## 2.1 Adding & Editing States and Transitions

### Draw Mode

Users can enable **Draw Mode** to sketch directly on the canvas.

The stroke will be red directly on the canvas

* Drawing a **circle** → creates a new state.
* Drawing a **line between two states** → creates a transition.
* Gestures are automatically interpreted and converted into graph elements.

---

### Manual Node Creation

States can also be added manually (e.g., via UI controls or prompts).
This allows precise creation without gesture detection.

---

### Selecting Nodes & Edges

Clicking a node or edge:

* Displays its properties in the **ItemPropertiesPanel** (left side).
* Allows editing of:

  * State name
  * Transition label
  * State type (initial/accepting)

---

### Setting Initial & Accepting States

Within the properties panel, a state can be marked as:

* **Initial State**
* **Accepting State**

Changes update immediately in the UI.

---

## 2.2 UI Conventions

The editor follows consistent visual rules:

| Type                   | Visual Style         |
| ---------------------- | -------------------- |
| Initial State          | Bold blue border     |
| Accepting State        | Double-circle border |
| ε (Epsilon) Transition | Purple dashed arrow  |
| Errored Component      | Highlighted in red (only if hightlight config is set in the evaluation params)   |

These visual cues help users quickly identify automaton structure and validation issues.

---

# 3. Feedback & Evaluation

## 3.1 Evaluation Parameters (Wizard Component)

Evaluation parameters are configured in the **Wizard component**, inside a collapsible **Eval Params** panel.

* These settings are **not displayed in the FSA input component**.
* This keeps the editor focused solely on automaton construction.

the panel corresponds to the `FSAConfig` type

```ts
export const fsaConfigSchema = z.object({
  evaluation_mode: z.enum(['strict', 'lenient', 'partial']).optional(),
  expected_type: z.enum(['DFA', 'NFA', 'any']).optional(),
  feedback_verbosity: z.enum(['minimal', 'standard', 'detailed']).optional(),

  check_minimality: z.boolean().optional(),
  check_completeness: z.boolean().optional(),

  highlight_errors: z.boolean().optional(),
})
```

please find the other details in ./src/FSA/types.ts

---

## 3.2 Feedback Display

Feedback (both preview and final submission):

* Appears below the **ItemPropertiesPanel**
* Conforms to the `FSAFeedback` type
* Requires no additional transformation before rendering

the FSAFeedback type can be seen below:

```ts
export const FSAFeedbackSchema = z.object({
  summary: z.string().default(""),

  errors: z.array(ValidationErrorSchema).default([]),
  warnings: z.array(ValidationErrorSchema).default([]),

  structural: StructuralInfoSchema.optional(),
  language: LanguageComparisonSchema.optional(),

  test_results: z.array(TestResultSchema).default([]),
  hints: z.array(z.string()).default([]),
});
```

please find the other details in ./src/FSA/types.ts

# 4. Running Guide

For the first time we run this code, make sure to build with

```
yarn build
```

then we can

```
yarn dev
```

to run the sandbox