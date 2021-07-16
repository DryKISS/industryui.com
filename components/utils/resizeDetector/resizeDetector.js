/**
 * Resize Detector
 */

// React
import React, { memo } from 'react'

// Utils
import { withResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

const RawResizeDetector = withResizeDetector(
  memo(
    ({ height, onResize, style, width }) => {
      typeof window !== 'undefined' &&
        window.requestAnimationFrame(() => onResize({ height, width }))
      return <ResizeDetectorWrapper style={style} />
    },
    ({ width: prevWidth, height: prevHeight }, { width: nextWidth, height: nextHeight }) =>
      prevWidth === nextWidth && prevHeight === nextHeight
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

export default RawResizeDetector
