/**
 * requestSimulator
 */
// React
import { useState } from 'react'

import Readme from '../README.md'
import { Button, requestSimulator, Text } from 'components'

export default {
  title: 'Utils/RequestSimulator',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
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
