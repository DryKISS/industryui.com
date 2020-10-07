/**
 * Debounce
 */
// React
import { useState } from 'react'

import Readme from '../README.md'
import { Button, debounce, Text } from 'components'

export default {
  title: 'Utils/Debounce',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const Debounce = () => {
  const [counter, setcounter] = useState(0)
  const handleClick = () => {
    setcounter(counter + 1)
  }
  return (
    <>
      <Text>{counter}</Text>
      <Button onClick={() => debounce(handleClick, 1000)}>inc. with debounce </Button>
    </>
  )
}
