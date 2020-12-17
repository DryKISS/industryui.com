/**
 * requestSimulator
 */

// React
import { useState } from 'react'

// UI
import { Button, requestSimulator, Space, Text } from 'components'
import Readme from '../README.md'

export default {
  args: {
    responseType: 'success',
    timeout: 1000
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/RequestSimulator'
}

export const RequestSimulator = args => {
  const [state, setstate] = useState({
    message: ''
  })

  const handleClick = async () => {
    setstate({ message: 'Loading...' })
    const res = await requestSimulator(args.responseType, args.timeout)
    setstate(res)
  }

  return (
    <>
      <Text>{state.message}</Text>
      <Space />
      <Button onClick={handleClick}>Mock request</Button>
    </>
  )
}
