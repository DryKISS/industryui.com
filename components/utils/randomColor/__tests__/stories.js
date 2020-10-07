/**
 * Random Color
 */

// React
import React, { useState } from 'react'

import Readme from '../README.md'
import { RandomColor } from '..'
import styled from 'styled-components'

export default {
  title: 'Utils/RandomColor',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const RandomColorCanvas = () => {
  const [Counter, setCounter] = useState(0)
  return (
    <ColorWrapper
      onClick={() => {
        setCounter(Counter + 1)
      }}
      style={{ backgroundColor: RandomColor() }}
    >
      click on this area to visualize new render
    </ColorWrapper>
  )
}
const ColorWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  place-content: center;
  font-size: 2rem;
`
