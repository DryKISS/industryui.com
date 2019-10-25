/**
 * Message Send
 * Provides a messaging send box
 */

// React
import { useState } from 'react'

// Emoji
import { Emoji, Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

// UI
import {
  Button,
  ButtonToolbar,
  Column,
  Close,
  Form,
  Image,
  Textarea,
  Row
} from '../../../../'

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
  const [emoji, setEmoji] = useState(false)

  const showEmojis = (em, e) => {
    e.preventDefault()
    setEmoji(!emoji)
  }

  const pickEmoji = (emoji, e) => {
    e.preventDefault()

    const data = {
      target: {
        value: message + emoji.native
      }
    }

    messageChange(data)
    setEmoji(false)
  }

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
            <Emoji onClick={showEmojis} emoji={{ id: 'smiley', skin: 1 }} size={32} />
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

      {emoji &&
        <Picker
          emoji='point_up_2'
          include={['foods', 'people', 'recent', 'nature']}
          onClick={pickEmoji}
          set='google'
          sheetSize={32}
          title='Pick your emoji...'
        />}

    </Row>
  )
}

const StyledContainer = styled.div`
  background-color: #ccc;
  border: 1px solid #000;
  height: 4rem;
  width: 4rem;
`
