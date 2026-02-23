// import { makeStyles } from '@styles'
import cytoscape, { Core, NodeSingular, EdgeSingular } from 'cytoscape'
import React, { useEffect, useRef, useState } from 'react'

import ConfigPanel from './components/ConfigPanel'
import ItemPropertiesPanel from './components/ItemPropertiesPanel'
import { useLocalStyles } from './styles'
import { CheckPhase, DEFAULT_FSA_CONFIG, FSA, FSAConfig, FSAFeedback } from './type'

interface FSAInputProps {
  answer: FSA
  handleChange: (fsa: FSA) => void
  feedback: FSAFeedback | null
  phase: CheckPhase
  isTeacherMode: boolean
}


export const FSAInput: React.FC<FSAInputProps> = ({
  answer,
  handleChange,
  feedback,
  phase,
  isTeacherMode
}) => {
  const { classes } = useLocalStyles()

  const cyRef = useRef<Core | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [selectedNode, setSelectedNode] = useState<NodeSingular | null>(null)
  const [selectedEdge, setSelectedEdge] = useState<EdgeSingular | null>(null)
  const [drawMode, setDrawMode] = useState<boolean>(false)
  const [fromNode, setFromNode] = useState<string | null>(null)
  const [config, setConfig] = useState<FSAConfig>(DEFAULT_FSA_CONFIG)
  const [configOpen, setConfigOpen] = useState<boolean>(true)

  /* -------------------- init cytoscape -------------------- */
  useEffect(() => {
    if (!containerRef.current) return

    const cy: Core = cytoscape({
      container: containerRef.current,
      layout: { name: 'preset' },
      style: [
        // ---------------- Nodes ----------------
        {
          selector: 'node',
          style: {
            label: 'data(displayLabel)',
            'text-valign': 'center',
            'text-halign': 'center',
            width: 50,
            height: 50,
            'background-color': '#fff',
            'border-width': 1,
            'border-color': '#555',
          },
        },

        {
          selector: 'node.initial',
          style: {
            'border-width': 3,
            'border-color': '#1976d2',
          },
        },

        {
          selector: 'node.accept',
          style: {
            'border-style': 'double',
            'border-width': 4,
          },
        },

        {
          selector: 'node.error-highlight',
          style: {
            'background-color': '#ffebee',
            'border-color': '#d32f2f',
            'border-width': 4,
          },
        },

        // ---------------- Edges ----------------
        {
          selector: 'edge',
          style: {
            label: 'data(label)',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'line-color': '#555',
            'target-arrow-color': '#555',
            'text-background-color': '#fff',
            'text-background-opacity': 1,
            'text-background-padding': '3px',
          },
        },

        {
          selector: 'edge.error-highlight',
          style: {
            'line-color': '#d32f2f',
            'target-arrow-color': '#d32f2f',
            'line-style': 'dashed',
            width: 3,
          },
        },
        {
          selector: 'edge.epsilon',
          style: {
            'line-style': 'dashed',
            'line-color': '#6a1b9a',
            'target-arrow-color': '#6a1b9a',
            width: 3,
            'font-style': 'italic',
          },
        },
      ],
    })

    cyRef.current = cy
    return () => cy.destroy()
  }, [])

  /* -------------------- node/edge handlers -------------------- */
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return

    const tapNode = (e: cytoscape.EventObject): void => {
      const node = e.target as NodeSingular

      if (drawMode) {
        if (!fromNode) {
          setFromNode(node.id())
          node.addClass('edge-source')
        } else {
          cy.add({
            group: 'edges',
            data: {
              id: `e-${fromNode}-${node.id()}-${Date.now()}`,
              source: fromNode,
              target: node.id(),
              label: 'edge'
            },
          })
          cy.nodes().removeClass('edge-source')
          setDrawMode(false)
          setFromNode(null)
          syncToBackend()
        }
        return
      }

      setSelectedNode(node)
      setSelectedEdge(null)
    }

    const tapEdge = (e: cytoscape.EventObject): void => {
      setSelectedEdge(e.target as EdgeSingular)
      setSelectedNode(null)
    }

    cy.on('tap', 'node', tapNode)
    cy.on('tap', 'edge', tapEdge)

    return () => {
      cy.off('tap', 'node', tapNode)
      cy.off('tap', 'edge', tapEdge)
    }
  }, [drawMode, fromNode])

  /* -------------------- sync to backend -------------------- */
  const syncToBackend = (): void => {
    const cy = cyRef.current
    if (!cy) return

    const fsa: FSA = {
      states: cy.nodes()?.map((n) => n.id()),
      transitions: cy.edges()?.map(
        (e) =>
          `${e.source().id()}|${e.data('label') || ' '}|${e.target().id()}`,
      ),
      initial_state: answer.initial_state,
      accept_states: answer.accept_states,
      alphabet: Array.from(
        new Set(cy.edges().map((e) => String(e.data('label')))),
      ),
      config: JSON.stringify(config)
    }

    handleChange(fsa)
  }

  /* -------------------- add state -------------------- */
  const addState = (): void => {
    const cy = cyRef.current
    if (!cy) return

    const id = `q${cy.nodes().length}`
    cy.add({
      group: 'nodes',
      data: { id, displayLabel: id },
      position: {
        x: 100 + Math.random() * 300,
        y: 100 + Math.random() * 300,
      },
    })

    syncToBackend()
  }

  /* -------------------- apply initial / accept styling -------------------- */
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return

    cy.nodes().removeClass('initial accept')

    if (answer.initial_state) {
      cy.$id(answer.initial_state).addClass('initial')
    }

    for (const id of answer.accept_states) {
      cy.$id(id).addClass('accept')
    }
  }, [answer.initial_state, answer.accept_states])

  /* -------------------- apply feedback highlights -------------------- */
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return

    cy.nodes().removeClass('error-highlight')
    cy.edges().removeClass('error-highlight')

    if (!feedback || !feedback.errors) return

    const highlights = feedback.errors
      .map((e) => e.highlight)
      .filter(Boolean)

    for (const h of highlights) {
      if (!h) continue

      switch (h.type) {
        case 'state':
        case 'initial_state':
        case 'accept_state': {
          if (h.state_id) {
            cy.$id(h.state_id).addClass('error-highlight')
          }
          break
        }

        case 'transition': {
          cy.edges()
            .filter((e) => {
              const fromOk = h.from_state
                ? e.source().id() === h.from_state
                : true
              const toOk = h.to_state
                ? e.target().id() === h.to_state
                : true
              const symOk = h.symbol
                ? e.data('label') === h.symbol
                : true
              return fromOk && toOk && symOk
            })
            .addClass('error-highlight')
          break
        }

        case 'alphabet_symbol': {
          if (h.symbol) {
            cy.edges()
              .filter((e) => e.data('label') === h.symbol)
              .addClass('error-highlight')
          }
          break
        }
      }
    }
  }, [feedback])


  return (
    <div className={classes.container}>
      {/* Left Panel */}
      <ItemPropertiesPanel
        cyRef={cyRef}
        classes={classes}
        addState={addState}
        drawMode={drawMode}
        setDrawMode={setDrawMode}
        setFromNode={setFromNode}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
        selectedEdge={selectedEdge}
        setSelectedEdge={setSelectedEdge}
        syncToBackend={syncToBackend}
        handleChange={handleChange}
        answer={answer}
        feedback={feedback}
        phase={phase}
      />

      {/* Canvas Area */}
      <div className={classes.canvasArea}>
        {isTeacherMode && (
          <div className={classes.canvasHeader}>
            <span className={classes.headerTitle}>
              Teacher Mode
            </span>

            <button
              className={classes.configButton}
              onClick={() => setConfigOpen(true)}
            >
              Evaluation Settings
            </button>
          </div>
        )}

        <div ref={containerRef} className={classes.cyWrapper} />
      </div>

      {/* Side Modal */}
      {isTeacherMode && configOpen && (
        <>
          <div
            className={classes.overlayBackdrop}
            onClick={() => setConfigOpen(false)}
          />

          <ConfigPanel
            config={config}
            setConfig={(val: FSAConfig) => {
              const fsa: FSA = {
                ...answer,
                config: JSON.stringify(val),
              }
              handleChange(fsa)
              setConfig(val)
            }}
            onClose={() => setConfigOpen(false)}
            classes={classes}
          />
        </>
      )}
    </div>
  )
}