// React
import React, { useEffect, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// Draft JS
import { EditorState, ContentState, convertFromRaw } from 'draft-js'

// UI
import { Close, Divider, MessagingEditor, ReplyIcon } from '../../../../'

export const ReplyContainer = ({ message, onClose, inMessage }) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      message.content.blocks
        ? convertFromRaw(message.content)
        : ContentState.createFromText(message.content)
    )
  )
  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        message.content.blocks
          ? convertFromRaw(message.content)
          : ContentState.createFromText(message.content)
      )
    )

    return () => {}
  }, [message])
  const handleCloseClick = () => {
    onClose()
  }

  return (
    <Container inMessage={inMessage}>
      {!inMessage && (
        <ReplyIconWrapper>
          <ReplyIcon context="info" />
        </ReplyIconWrapper>
      )}

      <Divider context="info" height="1.5rem" vertical />

      <MessageWrapper>
        <FromWrapper>{message.from}</FromWrapper>
        <MessagingEditor onChange={(e) => setEditorState(e)} editorState={editorState} readOnly />
      </MessageWrapper>

      {onClose && <Close click={handleCloseClick} context="dark" />}
    </Container>
  )
}
const FromWrapper = styled.div`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.replyFromColour};
  font-size: 0.75rem;
  line-height: initial;
  margin-bottom: -0.3rem;
  margin-top: 0.3rem;
`

const MessageWrapper = styled.div`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.replyTextColour};
  flex: 1;
  line-height: 2rem;
`

const ReplyIconWrapper = styled.div`
  height: 100%;
`

const Container = styled.div`
  background: ${({ theme: { MESSAGING } }) => MESSAGING.replyContainerBackground};
  display: flex;
  height: ${({ theme: { MESSAGING } }) => MESSAGING.replyContainerHeight};
  left: -4px;
  overflow: hidden;
  padding: 0.5rem 1rem;
  position: absolute;
  ${({ theme: { MESSAGING } }) => css`
    top: calc(-${MESSAGING.replyContainerHeight} - 0.05rem);
  `}
  ${({ inMessage }) =>
    inMessage &&
    css`
      background: ${({ theme: { MESSAGING } }) => MESSAGING.replyContainerBackgroundInsideMessage};
      border-radius: 0.5rem;
      position: relative;
      top: 0.5rem;
      margin-bottom: 0.5rem;
      hr {
        margin-left: 0;
      }
    `}
  width: 100%;
`
