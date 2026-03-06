import type { Core, NodeSingular, EdgeSingular } from 'cytoscape'
import React from 'react'

import { CheckPhase, FSA, FSAFeedback } from '../type'

import { FSAFeedbackPanel } from './FSAFeedbackPanel'

interface ItemPropertiesPanelProps {
  cyRef: React.MutableRefObject<Core | null>
  classes: Record<string, string>

  addState: () => void

  drawMode: boolean
  setDrawMode: React.Dispatch<React.SetStateAction<boolean>>
  setFromNode: (id: string | null) => void

  selectedNode: NodeSingular | null
  setSelectedNode: (n: NodeSingular | null) => void

  selectedEdge: EdgeSingular | null
  setSelectedEdge: (e: EdgeSingular | null) => void

  answer: FSA
  handleChange: (fsa: FSA) => void

  feedback: FSAFeedback | null
  phase: CheckPhase

  pathRef: React.MutableRefObject<paper.Path | null>
}

export default function ItemPropertiesPanel({
  cyRef,
  classes,
  addState,
  drawMode,
  setDrawMode,
  setFromNode,
  selectedNode,
  setSelectedNode,
  selectedEdge,
  setSelectedEdge,
  answer,
  handleChange,
  feedback,
  phase,
  pathRef,
}: ItemPropertiesPanelProps): JSX.Element {

  /* -------------------- Derived ids -------------------- */
  const selectedNodeId = selectedNode?.id() ?? null
  const selectedEdgeId = selectedEdge?.id() ?? null

  /* -------------------- Helpers -------------------- */

  /**
   * Parse the stable edge id back into "from|symbol|to" transition string.
   * Edge ids are of the form "e|from|symbol|to".
   */
  const transitionFromEdgeId = (edgeId: string): string =>
    edgeId.startsWith('e|') ? edgeId.slice(2) : edgeId

  const parseTransition = (t: string) => {
    const parts = t.split('|')
    return parts.length === 3
      ? { from: parts[0], symbol: parts[1], to: parts[2] }
      : null
  }

  /* -------------------- Delete -------------------- */

  const handleDelete = () => {
    if (selectedNodeId) {
      // Remove state and all transitions that reference it
      const newStates = answer.states.filter((s) => s !== selectedNodeId)
      const newTransitions = answer.transitions.filter((t) => {
        const p = parseTransition(t)
        return p && p.from !== selectedNodeId && p.to !== selectedNodeId
      })
      const newAcceptStates = answer.accept_states.filter((s) => s !== selectedNodeId)
      const newInitial =
        answer.initial_state === selectedNodeId ? '' : answer.initial_state

      handleChange({
        ...answer,
        states: newStates,
        transitions: newTransitions,
        accept_states: newAcceptStates,
        initial_state: newInitial,
        alphabet: deriveAlphabet(newTransitions),
      })
      setSelectedNode(null)
    }

    if (selectedEdgeId) {
      const transition = transitionFromEdgeId(selectedEdgeId)
      const newTransitions = answer.transitions.filter((t) => t !== transition)
      handleChange({
        ...answer,
        transitions: newTransitions,
        alphabet: deriveAlphabet(newTransitions),
      })
      setSelectedEdge(null)
    }
  }

  /** Re-derive alphabet from the current transition list. */
  const deriveAlphabet = (transitions: string[]): string[] =>
    Array.from(
      new Set(
        transitions
          .map((t) => parseTransition(t)?.symbol ?? '')
          .filter(Boolean),
      ),
    )

  /* -------------------- Node label edit -------------------- */

  const handleNodeLabelChange = (value: string) => {
    if (!selectedNodeId) return
    // Update the label in cy directly (it is display-only, not stored in answer)
    selectedNode?.data('label', value)
    // Note: label is not part of FSA answer schema — it lives only in cy.
    // If your FSA type does store labels, call handleChange here.
  }

  /* -------------------- Edge symbol edit -------------------- */

  const handleEdgeSymbolChange = (value: string) => {
    if (!selectedEdgeId || !selectedEdge) return

    // The edge id encodes the *original* from/to at creation time and never changes.
    // We only use it to recover source and target — never the symbol.
    const originalTransition = transitionFromEdgeId(selectedEdgeId)
    const parsed = parseTransition(originalTransition)
    if (!parsed) return

    const newSymbol = value.trim()

    // Reconstruct the *current* transition string using the live cy label,
    // not the id — because the symbol may have already been edited once.
    const currentSymbol = selectedEdge.data('label') as string
    const currentTransition = `${parsed.from}|${currentSymbol}|${parsed.to}`
    const newTransition = `${parsed.from}|${newSymbol}|${parsed.to}`

    // Update the cy element label in place (id is immutable by design)
    selectedEdge.data('label', newSymbol)
    if (newSymbol === 'ε' || newSymbol.toLowerCase() === 'epsilon' || newSymbol === '') {
      selectedEdge.addClass('epsilon')
    } else {
      selectedEdge.removeClass('epsilon')
    }

    // Replace the current transition string (not the original id-derived one)
    const newTransitions = answer.transitions.map((t) =>
      t === currentTransition ? newTransition : t,
    )

    handleChange({
      ...answer,
      transitions: newTransitions,
      alphabet: deriveAlphabet(newTransitions),
    })
  }

  /* -------------------- Render -------------------- */

  return (
    <div className={classes.panel}>
      <div className={classes.panelTitle}>Item Properties</div>

      {/* -------------------- Actions -------------------- */}
      <button className={classes.addButton} onClick={addState}>
        + Add State
      </button>

      <button
        className={classes.addButton}
        onClick={() => {
          const cy = cyRef.current
          if (!cy) return
          cy.fit(undefined, 40)
        }}
      >
        Fit to Screen
      </button>

      <button
        className={classes.addButton}
        onClick={() => {
          setDrawMode((m) => !m)
          setFromNode(null)
          cyRef.current?.nodes().removeClass('edge-source')

          if (pathRef.current) {
            pathRef.current.remove()
            pathRef.current = null
          }
        }}
        style={{
          backgroundColor: drawMode ? '#ff4444' : '#4CAF50',
          color: 'white',
          borderColor: drawMode ? '#ff4444' : '#4CAF50',
        }}
      >
        {drawMode ? '✗ Cancel Draw Mode' : '✏️ Enable Draw Mode'}
      </button>

      {/* -------------------- Node Properties -------------------- */}
      {selectedNode && (
        <>
          <div className={classes.field}>
            <label>Display Name</label>
            <input
              className={classes.inputField}
              value={selectedNode.data('label') ?? ''}
              onChange={(e) => handleNodeLabelChange(e.target.value)}
            />
          </div>

          {/* Initial State (unique) */}
          <div className={classes.checkboxRow}>
            <input
              type="checkbox"
              checked={answer.initial_state === selectedNodeId}
              onChange={(e) => {
                handleChange({
                  ...answer,
                  initial_state: e.target.checked
                    ? selectedNodeId!
                    : answer.initial_state,
                })
              }}
            />
            <label>Initial State</label>
          </div>

          {/* Accepting State (multiple allowed) */}
          <div className={classes.checkboxRow}>
            <input
              type="checkbox"
              checked={answer.accept_states.includes(selectedNodeId!)}
              onChange={(e) => {
                handleChange({
                  ...answer,
                  accept_states: e.target.checked
                    ? [...answer.accept_states, selectedNodeId!]
                    : answer.accept_states.filter((id) => id !== selectedNodeId),
                })
              }}
            />
            <label>Accepting State</label>
          </div>
        </>
      )}

      {/* -------------------- Edge Properties -------------------- */}
      {selectedEdge && (
        <div className={classes.field}>
          <label>Transition Symbol</label>
          <input
            className={classes.inputField}
            value={selectedEdge.data('label') ?? ''}
            onChange={(e) => handleEdgeSymbolChange(e.target.value)}
          />
        </div>
      )}

      {/* -------------------- Delete -------------------- */}
      {(selectedNode || selectedEdge) && (
        <button className={classes.deleteButton} onClick={handleDelete}>
          Delete Selected
        </button>
      )}

      <FSAFeedbackPanel feedback={feedback} phase={phase} />
    </div>
  )
}