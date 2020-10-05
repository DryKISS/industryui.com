/**
 * Random Color
 */
// React
import { useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import styled from 'styled-components'
import { ResizeDetector } from 'components'

export default {
  title: 'Utils/ResizeDetetor',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const resizeDetector = () => {
  const [Dimentions, setDimentions] = useState({ width: 300, height: 400 })
  return (
    <ElementsWrapper>
      <p>width:{Dimentions.width}px</p>
      <p>height:{Dimentions.height}px</p>
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
