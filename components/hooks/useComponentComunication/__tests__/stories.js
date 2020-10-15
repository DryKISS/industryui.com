/**
 * Component Comunication Service
 */

// React
import { useState, useRef } from 'react'

// UI
import styled from 'styled-components'

import useComponentComunication from '../useSubscription'
import { ComunicationService, Subscriber } from '../service'
import { MessageNames } from '../messageNames'
import { RandomColor } from 'components/utils'
import { Button, Text } from 'components'

export default {
  title: 'Utils/ComunicationService'
}

const Sender = () => {
  const val = useRef('')

  return (
    <SimpleWrapper style={{ background: RandomColor() }}>
      <input onChange={e => (val.current = e.target.value)} />
      <Text>message can be anything(event,method,flag,json,string), here it's a simple string</Text>

      <Button
        onClick={() => {
          ComunicationService.send({ name: MessageNames.TEST, payload: val.current })
        }}
      >
        send message
      </Button>
    </SimpleWrapper>
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

  return <Text style={{ background: RandomColor() }}>{Payload ?? 'no message'}</Text>
}

export const comunicationShowCase = () => {
  return (
    <>
      <Text>components background color is randomly generated to spot new renders</Text>

      <StyledContainer style={{ background: RandomColor() }}>
        <SimpleWrapper style={{ background: RandomColor() }}>
          <Reciever />
        </SimpleWrapper>

        <SimpleWrapper
          style={{
            background: RandomColor()
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
