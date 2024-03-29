/**
 * Messaging/Container
 */

// React
import React, { useState } from 'react'
import { array, func, number, object, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import DragAndDropable from '../components/dndable/dndable'
import FullPreview from '../components/fullPreview/fullPreview'
import MessageList from '../components/messageList/messageList'
import MessagingDragHover from '../components/dragHover/dragHover'
import MessagingSearch from '../components/search/meaasagingSearch'
import MessagingSend from '../components/send/messagingSend'
import MessageNames from '../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../organisms/messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../services/componentCommunication/messaging/service'
import MessagingSubscriber from '../../../services/componentCommunication/messaging/subscriber'
import useComponentCommunication from '../../../hooks/useComponentCommunication/useSubscription'

const Messaging = ({
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

  const [hasMessage, setHasMessage] = useState(messages && messages.length > 0)

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
      setHasMessage(true)
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
      payload: {
        action: MessagingActions.IS_SENDING_MESSAGE,
        data: messageToSend
      }
    })

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
          style={style}
        >
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
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.containerBackground};
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

Messaging.propTypes = {
  audienceItems: array,
  className: string,
  messages: array.isRequired,
  messagesContainerHeight: number,
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  onMessageSubmit: func.isRequired,
  style: object
}

export default Messaging
