import React, { memo } from 'react'
import { withResizeDetector } from 'react-resize-detector'
// let timer
const ResizeDetector = memo(
  ({ height, width, onResize }) => {
    // clearTimeout(timer)
    // timer = setTimeout(() => {onResize()}, 0)
    /* eslint-disable */
    requestAnimationFrame(() => onResize({ height, width }))
    return <div style={{ width: '100%', height: '100%' }} />
  },
  ({ width: prevWidth }, { width: nextWidth }) => prevWidth === nextWidth
)
export default withResizeDetector(ResizeDetector)
