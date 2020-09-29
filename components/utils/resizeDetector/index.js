/**
 * Resize Detector
 */

// React
import { memo } from 'react'

// Utils
import { withResizeDetector } from 'react-resize-detector'

export const ResizeDetector = withResizeDetector(
  memo(
    ({ height, width, onResize }) => {
      window.requestAnimationFrame(() => onResize({ height, width }))
      return <div style={{ width: '100%', height: '100%' }} />
    },
    ({ width: prevWidth }, { width: nextWidth }) => prevWidth === nextWidth
  )
)
