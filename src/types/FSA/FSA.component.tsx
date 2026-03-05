import cytoscape, { Core, NodeSingular, EdgeSingular } from 'cytoscape'
import paper from 'paper'
import React, { useEffect, useRef, useState } from 'react'

import ConfigPanel from './components/ConfigPanel'
import ItemPropertiesPanel from './components/ItemPropertiesPanel'
import { useLocalStyles } from './styles'
import {
  CheckPhase,
  DEFAULT_FSA_CONFIG,
  FSA,
  FSAConfig,
  FSAFeedback,
} from './type'

interface FSAInputProps {
  answer: FSA
  handleChange: (fsa: FSA) => void
  feedback: FSAFeedback | null
  phase: CheckPhase
  isTeacherMode: boolean
}

/* -------------------- Layout / drawing constants -------------------- */

/** Minimum bounding-box diameter (px) for a drawn stroke to be recognised as a circle. */
const MIN_CIRCLE_DIAMETER_PX = 25
/** Stroke length must exceed this fraction of the estimated circumference. */
const MIN_STROKE_CIRCUMFERENCE_RATIO = 0.3
/** Start-to-end distance must be less than this fraction of the diameter (i.e. the stroke is "closed"). */
const MAX_ENDPOINT_DISTANCE_RATIO = 0.5
/** Maximum distance (px) from a pointer position to the nearest node for snapping. */
const NODE_SNAP_DISTANCE_PX = 75
/** Base offset (px) for random node placement on the X axis. */
const NEW_NODE_OFFSET_X = 100
/** Base offset (px) for random node placement on the Y axis. */
const NEW_NODE_OFFSET_Y = 100
/** Range (px) added to the base offset via Math.random(). */
const NEW_NODE_RANDOM_RANGE = 300

// please take special notice to the data(label)
// this means the cy id for node and edges are just for making them different, it is never passed in the data
// the displayed name will always be the data(label) field
// as an analogy, think of the id as the SQL primary key, and the data.label is the stuff really displayed
const CY_CONFIG = (containerRef: React.MutableRefObject<HTMLDivElement | null>): cytoscape.CytoscapeOptions => {
  return {
    container: containerRef.current,
    layout: { name: 'preset' },
    style: [
      {
        selector: 'node',
        style: {
          label: 'data(label)',
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
  }
}

/* -------------------- Helpers -------------------- */

/**
 * Parse a transition string of the form "from|symbol|to" into its parts.
 * Returns null if the string is malformed.
 */
const parseTransition = (
  t: string,
): { from: string; symbol: string; to: string } | null => {
  const parts = t.split('|')
  if (parts.length !== 3) return null
  const [from, symbol, to] = parts
  // ideally this should never happen, as we cannot alter the data manually and 
  // everything in code should be kept safe
  // but writing this for type safety
  // else ts cries
  if (!(from && to && symbol)) return null
  return { from, to, symbol }
}

/**
 * Derive a stable Cytoscape edge id from a transition string so that
 * reconciliation can match existing edges without re-adding them.
 */
const edgeIdFromTransition = (t: string): string => `e|${t}`

/* -------------------- Component -------------------- */

export const FSAInput: React.FC<FSAInputProps> = ({
  answer,
  handleChange,
  feedback,
  phase,
  isTeacherMode,
}) => {
  const { classes } = useLocalStyles()

  const cyRef = useRef<Core | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Paper refs
  const drawCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const paperProjectRef = useRef<paper.Project | null>(null)
  const pathRef = useRef<paper.Path | null>(null)
  const startPointRef = useRef<paper.Point | null>(null)

  const [selectedNode, setSelectedNode] = useState<NodeSingular | null>(null)
  const [selectedEdge, setSelectedEdge] = useState<EdgeSingular | null>(null)

  const [drawMode, setDrawMode] = useState<boolean>(false)
  const [fromNode, setFromNode] = useState<string | null>(null)
  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  const [config, setConfig] = useState<FSAConfig>(DEFAULT_FSA_CONFIG)
  const [configOpen, setConfigOpen] = useState<boolean>(true)

  /* -------------------- init cytoscape -------------------- */
  useEffect(() => {
    if (!containerRef.current) return

    const cy: Core = cytoscape(CY_CONFIG(containerRef))
    cyRef.current = cy
    return () => cy.destroy()
  }, [])

  /* -------------------- Reconcile answer → Cytoscape -------------------- */
  /**
   * This is the ONLY place Cytoscape nodes/edges are added or removed.
   * It diffs `answer` against what Cytoscape currently holds and applies
   * the minimum set of mutations, so existing node positions are preserved.
   *
   * Positions are intentionally NOT stored in `answer`; newly-added nodes
   * are placed at a random offset so they don't stack on top of each other.
   */
  useEffect(() => {
    const cy = cyRef.current
    if (!cy) return

    // ---- Nodes ----
    const cyNodeIds = new Set(cy.nodes().map((n) => n.id()))
    const answerStateIds = new Set(answer.states)

    // Add nodes present in answer but missing from cy
    for (const id of answerStateIds) {
      if (!cyNodeIds.has(id)) {
        cy.add({
          group: 'nodes',
          data: { id, label: id },
          position: {
            x: NEW_NODE_OFFSET_X + Math.random() * NEW_NODE_RANDOM_RANGE,
            y: NEW_NODE_OFFSET_Y + Math.random() * NEW_NODE_RANDOM_RANGE,
          },
        })
      }
    }

    // Remove nodes present in cy but absent from answer
    for (const id of cyNodeIds) {
      if (!answerStateIds.has(id)) {
        cy.$id(id).remove()
      }
    }

    // ---- Edges ----
    const cyEdgeIds = new Set(cy.edges().map((e) => e.id()))
    const answerEdgeIds = new Set(answer.transitions.map(edgeIdFromTransition))

    // Add edges present in answer but missing from cy
    for (const t of answer.transitions) {
      const id = edgeIdFromTransition(t)
      if (cyEdgeIds.has(id)) continue

      const parsed = parseTransition(t)
      if (!parsed) continue

      const { from, symbol, to } = parsed

      // Only add the edge if both endpoint nodes exist (guard against stale data)
      if (!cy.$id(from).length || !cy.$id(to).length) continue

      cy.add({
        group: 'edges',
        data: { id, source: from, target: to, label: symbol },
      })

      // Apply epsilon styling immediately
      if (symbol === 'ε' || symbol.toLowerCase() === 'epsilon' || symbol === '') {
        cy.$id(id).addClass('epsilon')
      }
    }

    // Remove edges present in cy but absent from answer
    for (const id of cyEdgeIds) {
      if (!answerEdgeIds.has(id)) {
        cy.$id(id).remove()
      }
    }
  }, [answer.states, answer.transitions])

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
    const highlights = feedback.errors.map((e) => e.highlight).filter(Boolean)
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
              const fromOk = h.from_state ? e.source().id() === h.from_state : true
              const toOk = h.to_state ? e.target().id() === h.to_state : true
              const symOk = h.symbol ? e.data('label') === h.symbol : true
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

  /* -------------------- node/edge tap handlers -------------------- */
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
          // Add the new edge to answer — reconciliation will add it to cy
          const newTransition = `${fromNode}|edge|${node.id()}`
          handleChange({
            ...answer,
            transitions: [...answer.transitions, newTransition],
            alphabet: Array.from(new Set([...answer.alphabet, 'edge'])),
          })
          cy.nodes().removeClass('edge-source')
          setDrawMode(false)
          setFromNode(null)
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
  }, [drawMode, fromNode, answer])

  /* -------------------- Paper setup -------------------- */
  useEffect(() => {
    const canvas = drawCanvasRef.current
    if (!canvas || paperProjectRef.current) return

    const project = new paper.Project(canvas)
    paperProjectRef.current = project

    const updateSize = () => {
      if (!containerRef.current || !canvas) return
      const { width, height } = containerRef.current.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
      project.view.viewSize = new paper.Size(width, height)
      project.view.update()
    }

    updateSize()
    const resizeObserver = new ResizeObserver(updateSize)
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
      project.remove()
      paperProjectRef.current = null
    }
  }, [])

  /* -------------------- Drawing Handlers -------------------- */

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawMode || !paperProjectRef.current) return

    paperProjectRef.current.activate()

    const rect = drawCanvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (pathRef.current) pathRef.current.remove()

    pathRef.current = new paper.Path()
    pathRef.current.strokeColor = new paper.Color('#d32f2f')
    pathRef.current.strokeWidth = 3

    startPointRef.current = new paper.Point(x, y)
    pathRef.current.add(startPointRef.current)

    setIsDrawing(true)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawMode || !isDrawing || !pathRef.current) return

    const rect = drawCanvasRef.current?.getBoundingClientRect()
    if (!rect) return

    pathRef.current.add(
      new paper.Point(e.clientX - rect.left, e.clientY - rect.top),
    )
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawMode || !isDrawing || !pathRef.current || !startPointRef.current) {
      setIsDrawing(false)
      return
    }

    const rect = drawCanvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const endPoint = new paper.Point(e.clientX - rect.left, e.clientY - rect.top)

    const bounds = pathRef.current.bounds
    const diameter = Math.max(bounds.width, bounds.height)
    const strokeLength = pathRef.current.length
    const distance = startPointRef.current.getDistance(endPoint)

    const circumference = Math.PI * diameter
    const isCircle =
      diameter > MIN_CIRCLE_DIAMETER_PX &&
      strokeLength > circumference * MIN_STROKE_CIRCUMFERENCE_RATIO &&
      distance < diameter * MAX_ENDPOINT_DISTANCE_RATIO

    const cy = cyRef.current

    if (cy) {
      if (isCircle) {
        // New state: generate a unique id and push into answer
        const existingIds = new Set(answer.states)
        let n = cy.nodes().length
        let id = `q${n}`
        while (existingIds.has(id)) id = `q${++n}`

        handleChange({
          ...answer,
          states: [...answer.states, id],
        })
        // Cytoscape placement: the reconciliation effect will add the node,
        // but we want it at the drawn position — so we add it directly here
        // and let reconciliation skip it (it already exists by then).
        cy.add({
          group: 'nodes',
          data: { id, label: id },
          position: { x: bounds.center.x, y: bounds.center.y },
        })
      } else {
        // New edge: snap start/end to nearest nodes
        const findClosest = (x: number, y: number): NodeSingular | null => {
          let min = Infinity
          let closest: NodeSingular | null = null
          cy.nodes().forEach((node) => {
            const pos = node.renderedPosition()
            const dist = Math.hypot(pos.x - x, pos.y - y)
            if (dist < min) {
              min = dist
              closest = node
            }
          })
          return min < NODE_SNAP_DISTANCE_PX ? closest : null
        }

        const startNode = findClosest(startPointRef.current.x, startPointRef.current.y)
        const endNode = findClosest(endPoint.x, endPoint.y)

        if (startNode && endNode) {
          const newTransition = `${startNode.id()}|edge|${endNode.id()}`
          handleChange({
            ...answer,
            transitions: [...answer.transitions, newTransition],
            alphabet: Array.from(new Set([...answer.alphabet, 'edge'])),
          })
        }
      }
    }

    pathRef.current.remove()
    pathRef.current = null
    startPointRef.current = null
    setIsDrawing(false)
  }

  const handlePointerLeave = () => {
    if (pathRef.current) pathRef.current.remove()
    pathRef.current = null
    startPointRef.current = null
    setIsDrawing(false)
  }

  /* -------------------- Public mutations (answer-driven) -------------------- */

  const addState = (): void => {
    const existingIds = new Set(answer.states)
    const cy = cyRef.current
    let n = cy ? cy.nodes().length : answer.states.length
    let id = `q${n}`
    while (existingIds.has(id)) id = `q${++n}`

    // Position chosen now so we can place it immediately in cy;
    // reconciliation will see the node already exists and skip re-adding.
    const position = {
      x: NEW_NODE_OFFSET_X + Math.random() * NEW_NODE_RANDOM_RANGE,
      y: NEW_NODE_OFFSET_Y + Math.random() * NEW_NODE_RANDOM_RANGE,
    }

    // Add to cy first so we control the position
    cy?.add({ group: 'nodes', data: { id, label: id }, position })

    handleChange({ ...answer, states: [...answer.states, id] })
  }

  /* -------------------- Render -------------------- */

  return (
    <div className={classes.container}>
      <ItemPropertiesPanel
        cyRef={cyRef}
        classes={classes}
        drawMode={drawMode}
        setDrawMode={setDrawMode}
        setFromNode={setFromNode}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
        selectedEdge={selectedEdge}
        setSelectedEdge={setSelectedEdge}
        handleChange={handleChange}
        answer={answer}
        feedback={feedback}
        phase={phase}
        addState={addState}
        pathRef={pathRef}
      />

      <div className={classes.canvasArea} style={{ position: 'relative' }}>
        <div
          ref={containerRef}
          className={classes.cyWrapper}
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        />

        <canvas
          ref={drawCanvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: drawMode ? 'auto' : 'none',
            cursor: drawMode ? 'crosshair' : 'default',
            zIndex: 10,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
        />
      </div>

      {isTeacherMode && configOpen && (
        <ConfigPanel
          config={config}
          setConfig={(val: FSAConfig) => {
            handleChange({ ...answer, config: JSON.stringify(val) })
            setConfig(val)
          }}
          onClose={() => setConfigOpen(false)}
          classes={classes}
        />
      )}
    </div>
  )
}