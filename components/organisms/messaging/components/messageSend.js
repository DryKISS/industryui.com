/**
 * Message Send
 * Provides a messaging send box
 */

// React
import React from 'react'

// UI
import {
  Button,
  ButtonToolbar,
  Column,
  Close,
  Form,
  Image,
  Textarea,
  Row,
  EmojiMart
} from 'components'

// Style
import styled from 'styled-components'

export const MessageSend = ({
  message,
  picture,
  messageError,
  messageChange,
  messageReset,
  messageSubmit,
  pictureChange
}) => {
  return (
    <Row>
      <Column md={2}>
        {!picture &&
          <StyledContainer />}

        {picture &&
          <div>
            <Close click={() => {}} />
            <Image alt='Picture' src={picture} style={{ border: '1px solid #000' }} />
          </div>}
      </Column>
      <Column md={10}>
        <Form submit={messageSubmit}>
          <Textarea
            change={messageChange}
            id='message'
            maxLength={320}
            rows={2}
            value={message}
          />
          <div style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <EmojiMart onSelect={emoji => messageChange(message + emoji)} />
          </div>
          <div className='float-right'>
            <ButtonToolbar>
              <Button
                content='Reset'
                context='danger'
                size='lg'
                onClick={messageReset}
              />
              <Button
                content='Send'
                context='primary'
                size='lg'
                type='submit'
              />
            </ButtonToolbar>
          </div>
        </Form>
      </Column>
    </Row>
  )
}

const StyledContainer = styled.div`
  background-color: #ccc;
  border: 1px solid #000;
  height: 4rem;
  width: 4rem;
`
