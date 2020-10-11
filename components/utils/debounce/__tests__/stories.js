/**
 * Debounce
 */
// React
import { useState } from 'react'

// UI
import { Button, debounce, Text } from 'components'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/Debounce'
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
