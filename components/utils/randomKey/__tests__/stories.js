/**
 * Random Key
 */

// UI
import React, { RandomKey } from '../../../'
import Readme from '../README.md'

// Style
import styled from 'styled-components'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Utils/RandomKey',
}

export const Main = () => {
  const elementsLength = 50
  const arr = Array.from(Array(elementsLength).keys())

  const keys = arr.map(() => {
    return RandomKey()
  })

  return (
    <ElementsWrapper>
      {arr.map((_, index) => {
        return <p key={keys[index]}>{keys[index]}</p>
      })}
    </ElementsWrapper>
  )
}

const ElementsWrapper = styled.div`
  width: 100%;
  p {
    padding: 0;
    margin: 0;
  }
`
