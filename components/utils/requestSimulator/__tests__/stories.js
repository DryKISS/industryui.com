/**
 * requestSimulator
 */

// React
import React, { useState } from 'react'

// UI
import requestSimulator from '../requestSimulator'
import Button from '../../../atoms/button/button/button'
import Space from '../../../atoms/space/space'
import Text from '../../../atoms/text/text'

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

export const Main = (args) => {
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
