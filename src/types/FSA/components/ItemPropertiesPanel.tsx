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

  syncToBackend: () => void
  feedback: FSAFeedback | null
  phase: CheckPhase
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
  syncToBackend,
  feedback,
  phase
}: ItemPropertiesPanelProps): JSX.Element {
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
          cyRef.current?.nodes().removeClass('edge-source edge-target')
        }}
      >
        {drawMode ? 'Cancel Draw' : 'Draw Transition'}
      </button>

      {/* -------------------- Node Properties -------------------- */}
      {selectedNode && (
        <>
          <div className={classes.field}>
            <label>Display Name</label>
            <input
              className={classes.inputField}
              value={selectedNode.data('displayLabel') ?? ''}
              onChange={(e) => {
                selectedNode.data('displayLabel', e.target.value)
                // syncToBackend()
              }}
            />
          </div>

          {/* Initial State (unique) */}
          <div className={classes.checkboxRow}>
            <input
              type="checkbox"
              checked={answer.initial_state === selectedNode.id()}
              onChange={(e) => {
                handleChange({
                  ...answer,
                  initial_state: e.target.checked ? selectedNode.id() : answer.initial_state,
                })
                // syncToBackend()
              }}
            />
            <label>Initial State</label>
          </div>

          {/* Accepting State (multiple allowed) */}
          <div className={classes.checkboxRow}>
            <input
              type="checkbox"
              checked={answer.accept_states.includes(selectedNode.id())}
              onChange={(e) => {
                handleChange({
                  ...answer,
                  accept_states: e.target.checked
                    ? [...answer.accept_states, selectedNode.id()]
                    : answer.accept_states.filter(
                        (id) => id !== selectedNode.id(),
                      ),
                })
                // syncToBackend()
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
            onChange={(e) => {
              const value = e.target.value.trim()

              selectedEdge.data('label', value)

              if (value === 'ε' || value.toLowerCase() === 'epsilon' || value === '') {
                selectedEdge.addClass('epsilon')
              } else {
                selectedEdge.removeClass('epsilon')
              }

              syncToBackend()
            }}
          />
        </div>
      )}

      {/* -------------------- Delete -------------------- */}
      {(selectedNode || selectedEdge) && (
        <button
          className={classes.deleteButton}
          onClick={() => {
            selectedNode?.remove()
            selectedEdge?.remove()
            setSelectedNode(null)
            setSelectedEdge(null)
            syncToBackend()
          }}
        >
          Delete Selected
        </button>
      )}
      <FSAFeedbackPanel
        feedback={feedback}
        // previewFeedback={previewFeedback}
        phase={phase}
      />
    </div>
  )
}
