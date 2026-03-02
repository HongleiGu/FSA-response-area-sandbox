import { Editor } from 'tldraw'

export function hasAllShapesOutOfView(editor: Editor): boolean {
  const shapes = editor.getCurrentPageShapes()
  if (shapes.length === 0) return false

  const viewportBounds = editor.getViewportPageBounds()

  const ret = shapes.every(shape => {
    const shapeBounds = editor.getShapePageBounds(shape)
    if (!shapeBounds) return true
    return (
      shapeBounds.x >= viewportBounds.x + viewportBounds.w ||
      shapeBounds.x + shapeBounds.w <= viewportBounds.x ||
      shapeBounds.y >= viewportBounds.y + viewportBounds.h ||
      shapeBounds.y + shapeBounds.h <= viewportBounds.y
    )
  })
  return ret
}

export function getShapesMinCoordinates(editor: Editor): {
  minX: number
  minY: number
} {
  const shapes = editor.getCurrentPageShapes()
  if (shapes.length === 0) return { minX: 0, minY: 0 }

  const { minX, minY } = shapes.reduce(
    (acc, shape) => {
      const bounds = editor.getShapePageBounds(shape)
      if (!bounds) return acc
      return {
        minX: Math.min(acc.minX, bounds.x),
        minY: Math.min(acc.minY, bounds.y),
      }
    },
    { minX: Infinity, minY: Infinity },
  )

  return {
    minX: minX === Infinity ? 0 : minX,
    minY: minY === Infinity ? 0 : minY,
  }
}
