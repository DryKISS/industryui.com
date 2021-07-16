/**
 * Debounce
 */

// React
import React, { useState } from 'react'

// UI
import Button from '../../../atoms/button/button/button'
import debounce from '../debounce'
import Text from '../../../atoms/text/text'
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

export const Main = () => {
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
