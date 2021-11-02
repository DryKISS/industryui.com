/**
 * Messaging/Message
 */

// React
import React, { useState } from 'react'

// UI
import Message from '../message'
import Readme from '../README.md'

// Data
import { singleMessage } from '../__mocks__/message'

export default {
  component: Message,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/Message'
}

export const Main = (args) => {
  const [message, setMessage] = useState(singleMessage)
  const handleInputChange = (e) => {
    const tmp = { ...message }
    tmp.content = e.target.value
    setMessage({ ...tmp })
  }
  return (
    <>
      <input type="text" onChange={handleInputChange} />
      <Message {...args} config={{}} message={message} prevType="out" time="12:00" type="in" />
    </>
  )
}
