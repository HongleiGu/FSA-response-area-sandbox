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

  const [selectedNode, setSelectedNode] =
    useState<NodeSingular | null>(null)
  const [selectedEdge, setSelectedEdge] =
    useState<EdgeSingular | null>(null)

  const [drawMode, setDrawMode] = useState<boolean>(false)
  const [fromNode, setFromNode] = useState<string | null>(null)
  const [isDrawing, setIsDrawing] = useState<boolean>(false)

  const [config, setConfig] =
    useState<FSAConfig>(DEFAULT_FSA_CONFIG)
  const [configOpen, setConfigOpen] =
    useState<boolean>(true)

  /* -------------------- init cytoscape -------------------- */
  useEffect(() => {
    if (!containerRef.current) return

    const cy: Core = cytoscape({
      container: containerRef.current,
      layout: { name: 'preset' },
      style: [
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
            'font-style': 
            'italic', 
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

  /* -------------------- Paper setup -------------------- */
  useEffect(() => {
    const canvas = drawCanvasRef.current
    if (!canvas || paperProjectRef.current) return

    const project = new paper.Project(canvas)
    paperProjectRef.current = project

    const updateSize = () => {
      if (!containerRef.current || !canvas) return
      const { width, height } =
        containerRef.current.getBoundingClientRect()

      canvas.width = width
      canvas.height = height
      project.view.viewSize = new paper.Size(width, height)
      project.view.update()
    }

    updateSize()
    const resizeObserver = new ResizeObserver(updateSize)
    if (containerRef.current)
      resizeObserver.observe(containerRef.current)

    return () => {
      resizeObserver.disconnect()
      project.remove()
      paperProjectRef.current = null
    }
  }, [])

  /* -------------------- Drawing Handlers -------------------- */

  const handlePointerDown = (
    e: React.PointerEvent<HTMLCanvasElement>,
  ) => {
    if (!drawMode || !paperProjectRef.current) return

    paperProjectRef.current.activate()

    const rect =
      drawCanvasRef.current?.getBoundingClientRect()
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

  const handlePointerMove = (
    e: React.PointerEvent<HTMLCanvasElement>,
  ) => {
    if (!drawMode || !isDrawing || !pathRef.current)
      return

    const rect =
      drawCanvasRef.current?.getBoundingClientRect()
    if (!rect) return

    pathRef.current.add(
      new paper.Point(
        e.clientX - rect.left,
        e.clientY - rect.top,
      ),
    )
  }

  const handlePointerUp = (
    e: React.PointerEvent<HTMLCanvasElement>,
  ) => {
    if (
      !drawMode ||
      !isDrawing ||
      !pathRef.current ||
      !startPointRef.current
    ) {
      setIsDrawing(false)
      return
    }

    const rect =
      drawCanvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const endPoint = new paper.Point(
      e.clientX - rect.left,
      e.clientY - rect.top,
    )

    const bounds = pathRef.current.bounds
    const diameter = Math.max(
      bounds.width,
      bounds.height,
    )
    const strokeLength = pathRef.current.length
    const distance =
      startPointRef.current.getDistance(endPoint)

    const circumference = Math.PI * diameter
    const isCircle =
      diameter > MIN_CIRCLE_DIAMETER_PX &&
      strokeLength > circumference * MIN_STROKE_CIRCUMFERENCE_RATIO &&
      distance < diameter * MAX_ENDPOINT_DISTANCE_RATIO

    const cy = cyRef.current

    if (cy) {
      if (isCircle) {
        const id = `q${cy.nodes().length}`
        cy.add({
          group: 'nodes',
          data: { id, displayLabel: id },
          position: {
            x: bounds.center.x,
            y: bounds.center.y,
          },
        })
        syncToBackend()
      } else {
        const findClosest = (
          x: number,
          y: number
        ): NodeSingular | null => {
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


        const startNode = findClosest(
          startPointRef.current.x,
          startPointRef.current.y,
        )
        const endNode = findClosest(
          endPoint.x,
          endPoint.y,
        )

        if (
          startNode &&
          endNode &&
          startNode.id() !== endNode.id()
        ) {
          cy.add({
            group: 'edges',
            data: {
              id: `e-${startNode.id()}-${endNode.id()}-${Date.now()}`,
              source: startNode.id(),
              target: endNode.id(),
              label: 'edge',
            },
          })
          syncToBackend()
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

  /* -------------------- Sync to backend -------------------- */

  const syncToBackend = (): void => {
    const cy = cyRef.current
    if (!cy) return

    const fsa: FSA = {
      states: cy.nodes().map((n) => n.id()),
      transitions: cy.edges().map(
        (e) =>
          `${e.source().id()}|${e.data(
            'label',
          )}|${e.target().id()}`,
      ),
      initial_state: answer.initial_state,
      accept_states: answer.accept_states,
      alphabet: Array.from(
        new Set(
          cy.edges().map((e) =>
            String(e.data('label')),
          ),
        ),
      ),
      config: JSON.stringify(config),
    }

    handleChange(fsa)
  }

  const addState = (): void => {
    const cy = cyRef.current
    if (!cy) return

    const id = `q${cy.nodes().length}`

    cy.add({
      group: 'nodes',
      data: { id, displayLabel: id },
      position: {
        x: NEW_NODE_OFFSET_X + Math.random() * NEW_NODE_RANDOM_RANGE,
        y: NEW_NODE_OFFSET_Y + Math.random() * NEW_NODE_RANDOM_RANGE,
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
        syncToBackend={syncToBackend}
        handleChange={handleChange}
        answer={answer}
        feedback={feedback}
        phase={phase} 
        addState={addState}    
        pathRef={pathRef}  
      />

      <div
        className={classes.canvasArea}
        style={{ position: 'relative' }}
      >
        <div
          ref={containerRef}
          className={classes.cyWrapper}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        />

        <canvas
          ref={drawCanvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: drawMode
              ? 'auto'
              : 'none',
            cursor: drawMode
              ? 'crosshair'
              : 'default',
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
            handleChange({
              ...answer,
              config: JSON.stringify(val),
            })
            setConfig(val)
          }}
          onClose={() => setConfigOpen(false)}
          classes={classes}
        />
      )}
    </div>
  )
}
