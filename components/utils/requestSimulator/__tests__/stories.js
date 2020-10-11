/**
 * requestSimulator
 */

// React
import { useState } from 'react'

// UI

import { Button, requestSimulator, Text } from 'components'
import Readme from '../README.md'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/RequestSimulator'
}

export const RequestSimulator = () => {
  const [state, setstate] = useState({ message: '' })

  const handleClick = async () => {
    setstate({ message: 'loading...' })
    const res = await requestSimulator()
    setstate(res)
  }

  return (
    <>
      <Text>{state.message}</Text>
      <Button onClick={handleClick}>mock request</Button>
    </>
  )
}
