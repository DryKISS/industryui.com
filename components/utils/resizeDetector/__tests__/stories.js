/**
 * Rwsize Detector
 */
// React
import { useState } from 'react'

import Readme from '../README.md'
import { ResizeDetector } from 'components'
import styled from 'styled-components'

export default {
  title: 'Utils/ResizeDetetor',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const resizeDetector = () => {
  const [Dimentions, setDimentions] = useState({ height: 400, width: 300 })
  return (
    <ElementsWrapper>
      <p>height:{Dimentions.height}px</p>
      <p>width:{Dimentions.width}px</p>
      <ResizeDetector style={{ position: 'absolute' }} onResize={setDimentions} />
      <p>resize the container from corner</p>
    </ElementsWrapper>
  )
}

const ElementsWrapper = styled.div`
  width: 300px;
  height: 400px;
  background: white;
  resize: both;
  overflow: auto;
  padding: 20px;
  position: relative;
`
