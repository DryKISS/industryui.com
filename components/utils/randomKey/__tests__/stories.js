/**
 * Random Key
 */

// UI
import { RandomKey } from 'components'
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
  title: 'Utils/RandomKey'
}

export const RandomKeysShowCase = () => {
  const elementsLength = 50
  const arr = Array.from(Array(elementsLength).keys())

  const keys = arr.map(() => {
    return RandomKey()
  })

  return (
    <ElementsWrapper>
      {arr.map((_, index) => {
        console.log(keys[index])
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
