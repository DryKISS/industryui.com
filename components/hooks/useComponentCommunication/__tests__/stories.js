/**
 * Component Communication Service
 */

// React
import React, { useState, useRef } from 'react'

// Storybook
import { Wrapper } from '../../../../.storybook/decorators'

// UI
import {
  Button,
  CommunicationService,
  MessageNames,
  RandomColor,
  Subscriber,
  Text,
  useComponentCommunication,
} from '../../../'

// Style
import styled from 'styled-components'

export default {
  decorators: [Wrapper],
  title: 'Utils/CommunicationService',
}

const Sender = () => {
  const val = useRef('')
  return (
    <SimpleWrapper style={{ background: RandomColor() }}>
      <input onChange={(e) => (val.current = e.target.value)} />
      <Text>message can be anything(event,method,flag,json,string), here it's a simple string</Text>

      <Button
        onClick={() => {
          CommunicationService.send({
            name: MessageNames.TEST,
            payload: val.current,
          })
        }}
      >
        send message
      </Button>
    </SimpleWrapper>
  )
}

const Reciever = () => {
  const [Payload, setPayload] = useState()

  const logPayload = (payload) => {
    setPayload(payload)
  }

  useComponentCommunication({
    onRecieve: logPayload,
    subscriber: Subscriber,
    messageName: MessageNames.TEST,
  })

  return <Text style={{ background: RandomColor() }}>{Payload ?? 'no message'}</Text>
}

export const CommunicationShowCase = () => {
  return (
    <>
      <Text>components background color is randomly generated to spot new renders</Text>

      <StyledContainer style={{ background: RandomColor() }}>
        <SimpleWrapper style={{ background: RandomColor() }}>
          <Reciever />
        </SimpleWrapper>

        <SimpleWrapper
          style={{
            background: RandomColor(),
          }}
        >
          <Sender />
        </SimpleWrapper>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1rem;
  width: 100%;
`

const SimpleWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
`
