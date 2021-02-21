/**
 * Messaging/Container
 */

// React
import React, { useState } from 'react'
import { array, func, number, object, string } from 'prop-types'

// UI
import {
  DragAndDropable,
  FullPreview,
  MessageList,
  MessagingDragHover,
  MessagingSearch,
  MessagingSend,
  MessageNames,
  MessagingActions,
  MessagingCommunicationService,
  MessagingSubscriber,
  useComponentCommunication
} from '../../../'

// Style
import styled from 'styled-components'

export const MessagingContainer = ({
  audienceItems,
  className,
  forwardForMessages,
  maxLength,
  mentions,
  menuForMessages,
  messages,
  messagesContainerHeight,
  onFilter,
  onHashtagClick,
  onMentionClick,
  onMessageSubmit,
  onSearch,
  replyForMessages,
  style
}) => {
  const messagesConfig = {
    ...(forwardForMessages && { hasForward: true }),
    ...(menuForMessages && { hasMenu: true }),
    ...(replyForMessages && { hasReply: true })
  }

  const [Files, setFiles] = useState([])
  const [hasMessage, sethasMessage] = useState(messages && messages.length > 0)
  const [IsDragHoverOpen, setIsDragHoverOpen] = useState(false)

  const onHover = () => {
    if (!IsDragHoverOpen) {
      setIsDragHoverOpen(true)
    }
  }
  const onLeave = () => {
    setIsDragHoverOpen(false)
  }
  const onDrop = (e) => {
    setFiles(e)
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: e
      }
    })
  }
  const closeHoverPopup = () => {
    setFiles((files) => [])
    setIsDragHoverOpen(false)
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: []
      }
    })
  }

  const handleRemoveFile = (fileIndex) => {
    const newFiles = [...Files]
    newFiles.splice(fileIndex, 1)
    if (newFiles.length === 0) {
      closeHoverPopup()
      return
    }
    setFiles(newFiles)
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: newFiles
      }
    })
  }

  const handleAttachSubmitClick = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: Files
      }
    })
  }

  const handleMessageRecieved = () => {
    if (hasMessage === false) {
      sethasMessage(true)
    }
  }

  const onAction = (payload) => {
    switch (payload.action) {
      case MessagingActions.HASHTAG_CLICKED:
        onHashtagClick(payload.data)
        break
      case MessagingActions.MENTION_CLICKED:
        onMentionClick(payload.data)
        break
      case MessagingActions.EDIT_MESSAGE:
        console.info(payload.data)
        break
      case MessagingActions.DELETE_MESSAGE:
        console.info(payload.data)
        break
      case MessagingActions.STAR_MESSAGE:
        console.info(payload.data)
        break

      default:
        break
    }
  }

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onAction,
    subscriber: MessagingSubscriber
  })

  const handleSubmit = (messageToSend) => {
    onMessageSubmit(messageToSend)
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: { action: MessagingActions.CLEAR_INPUT }
    })

    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE,
        data: []
      }
    })
    setIsDragHoverOpen(() => false)
    setTimeout(() => {
      setFiles((files) => [])
    }, 500)
  }

  return (
    <>
      <FullPreview />
      <DragAndDropable onFileDrop={onDrop} onHover={onHover} onLeave={onLeave}>
        <MessagingSearch onFilter={onFilter} onSearch={onSearch} />

        <StyledContainer
          messagesContainerHeight={hasMessage ? messagesContainerHeight : 0}
          className={className}
          style={style}>
          <MessageList
            config={messagesConfig}
            initialMessages={messages}
            onMessageRecieved={handleMessageRecieved}
          />
        </StyledContainer>
        <MessagingSend
          audienceItems={audienceItems}
          onSubmit={handleSubmit}
          maxLength={maxLength}
          mentions={mentions}
        />
        <MessagingDragHover
          files={Files}
          handleRemoveFile={handleRemoveFile}
          isOpen={IsDragHoverOpen}
          onClose={closeHoverPopup}
          onSubmit={handleAttachSubmitClick}
        />
      </DragAndDropable>
    </>
  )
}
const StyledContainer = styled.div`
  background-color: ${({ theme: { MESSAGING } }) =>
    MESSAGING.containerBackground};
  height: ${({ messagesContainerHeight }) =>
    messagesContainerHeight ? messagesContainerHeight + 'px' : '300px'};
  overflow: hidden;
  position: relative;

  .ReactVirtualized__Grid {
    outline: none;
  }
  .public-DraftStyleDefault-block {
    margin: 0.25em 0;
  }
`

MessagingContainer.propTypes = {
  audienceItems: array,
  className: string,
  messages: array.isRequired,
  messagesContainerHeight: number,
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  onMessageSubmit: func.isRequired,
  style: object
}
