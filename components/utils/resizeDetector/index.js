/**
 * Resize Detector
 */

// React
import { memo } from 'react'

// Util
import { withResizeDetector } from 'react-resize-detector'

// let timer
export const ResizeDetector = withResizeDetector(
  memo(
    ({ height, width, onResize }) => {
      // clearTimeout(timer)
      // timer = setTimeout(() => {onResize()}, 0)
      requestAnimationFrame(() => onResize({ height, width }))
      return <div style={{ width: '100%', height: '100%' }} />
    },
    ({ width: prevWidth }, { width: nextWidth }) => prevWidth === nextWidth
  )
)
