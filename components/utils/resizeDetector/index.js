import React, { memo } from 'react'
import { withResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

// let timer
export const ResizeDetector = withResizeDetector(
  memo(
    ({ height, onResize, style, width }) => {
      window.requestAnimationFrame(() => onResize({ height, width }))
      return <ResizeDetectorWrapper style={style} />
    },
    ({ width: prevWidth }, { width: nextWidth }) => prevWidth === nextWidth
  )
)
const ResizeDetectorWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
  pointer-events: none;
`
