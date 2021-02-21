/**
 * Components - Resize Detector
 */

// React
import React, { useState } from 'react'

// UI
import { ResizeDetector } from '../index'
import Readme from '../README.md'

// Style
import styled from 'styled-components'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/ResizeDetetor'
}

export const Main = () => {
  const [Dimentions, setDimentions] = useState({ height: 400, width: 300 })

  return (
    <ElementsWrapper>
      <p>height:{Dimentions.height}px</p>
      <p>width:{Dimentions.width}px</p>

      <ResizeDetector
        style={{ position: 'absolute' }}
        onResize={setDimentions}
      />

      <p>resize the container from corner</p>
    </ElementsWrapper>
  )
}

const ElementsWrapper = styled.div`
  height: 400px;
  background: white;
  overflow: auto;
  padding: 20px;
  position: relative;
  resize: both;
  width: 300px;
`
