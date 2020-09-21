/**
 * Random Color
 */

// React
import React, { useState, useRef } from 'react'

// Storybook
import { Wrapper } from 'decorators'
import useComponentComunication from '../useSubscription'
import { Subscriber, ComunicationService } from '../service'
import { MessageNames } from '../messageNames'
import { RandomColor } from 'components/utils'
export default {
  title: 'Utils/ComunicationService',
  decorators: [Wrapper]
}
const Sender = () => {
  const val = useRef('')
  return (
    <div>
      <input onChange={e => (val.current = e.target.value)} />
      <button
        onClick={() => {
          ComunicationService.send({ name: MessageNames.TEST, payload: val.current })
        }}
      >
        send message
      </button>
    </div>
  )
}

const Reciever = () => {
  const [Payload, setPayload] = useState()
  const logPayload = payload => {
    console.log(payload)
    setPayload(payload)
  }
  useComponentComunication({
    onRecieve: logPayload,
    subscriber: Subscriber,
    messageName: MessageNames.TEST
  })
  return <p style={{ background: RandomColor() }}>{Payload ?? 'no message'}</p>
}

export const comunicationShowCase = () => {
  return (
    <div
      style={{
        background: RandomColor(),
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem'
      }}
    >
      <div
        style={{
          background: RandomColor(),
          padding: '1rem',
          margin: '1rem'
        }}
      >
        <Reciever />
      </div>
      <div
        style={{
          background: RandomColor(),
          padding: '1rem'
        }}
      >
        <Sender />
      </div>
    </div>
  )
}
