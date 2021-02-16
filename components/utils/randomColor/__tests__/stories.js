/**
 * Random Color
 */

// React
import { useState } from 'react'

// UI
import { RandomColor } from '../../../'
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
  title: 'Utils/RandomColor'
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
  display: grid;
  font-size: 2rem;
  height: 200px;
  place-content: center;
  width: 100%;
`
