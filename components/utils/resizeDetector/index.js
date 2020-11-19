/**
 * Resize Detector
 */

// React
import { memo } from 'react'

// Utils
import { withResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

export const ResizeDetector = withResizeDetector(
  memo(
    ({ height, onResize, style, width }) => {
      window && window.requestAnimationFrame(() => onResize({ height, width }))
      return <ResizeDetectorWrapper style={style} />
    },
    ({ width: prevWidth }, { width: nextWidth }) => prevWidth === nextWidth
  )
)

const ResizeDetectorWrapper = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
`
