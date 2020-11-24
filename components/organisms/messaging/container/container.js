/**
 * Messaging/Container
 */

// React
import { useState } from 'react'
import { array, func, number, object, string } from 'prop-types'

// UI
import {
  DragAndDropable,
  MessageList,
  MessagingDragHover,
  MessagingSearch,
  MessagingSend,
  useComponentCommunication
} from 'components'

import {
  MessageNames,
  MessagingCommunicationService,
  MessagingSubscriber
} from 'components/services'

// Style
import styled from 'styled-components'

export const MessagingContainer = ({
  audienceItems,
  className,
  maxLength,
  mentions,
  messages,
  onFilter,
  onHashtagClick,
  onMentionClick,
  onMessageSubmit,
  onSearch,
  style
}) => {
  const [Files, setFiles] = useState([])
  const [IsDragHoverOpen, setIsDragHoverOpen] = useState(false)
  const [Messages, setMessages] = useState(messages)

  const onHover = () => {
    if (!IsDragHoverOpen) {
      setIsDragHoverOpen(true)
    }
  }
  const onLeave = () => {
    setIsDragHoverOpen(false)
  }
  const onDrop = e => {
    setFiles(e)
  }
  const closeHoverPopup = () => {
    setFiles(files => [])
    setIsDragHoverOpen(false)
  }

  const handleRemoveFile = fileIndex => {
    const newFiles = [...Files]
    newFiles.splice(fileIndex, 1)
    if (newFiles.length === 0) {
      closeHoverPopup()
      return
    }
    setFiles(newFiles)
  }

  const handleAttachSubmitClick = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.SET_ATTACHMENTS_TO_NEW_MESSAGE,
      payload: Files
    })

    setIsDragHoverOpen(false)
  }

  const onRecieve = payload => {
    const newMessagesArray = [...Messages, ...payload]
    setMessages([...newMessagesArray])
  }

  useComponentCommunication({
    dependencies: [Messages.length],
    messageName: MessageNames.Messaging.NEW_MESSAGES,
    onRecieve,
    subscriber: MessagingSubscriber
  })
  useComponentCommunication({
    messageName: MessageNames.Messaging.HASHTAG_CLICKED,
    onRecieve: e => onHashtagClick(e),
    subscriber: MessagingSubscriber
  })
  useComponentCommunication({
    messageName: MessageNames.Messaging.MENTION_CLICKED,
    onRecieve: e => onMentionClick(e),
    subscriber: MessagingSubscriber
  })

  const handleSubmit = messageToSend => {
    onMessageSubmit(messageToSend)

    MessagingCommunicationService.send({
      name: MessageNames.Messaging.CLEAR_INPUT
    })
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.SET_ATTACHMENTS_TO_NEW_MESSAGE,
      payload: []
    })
  }

  return (
    <DragAndDropable onFileDrop={onDrop} onHover={onHover} onLeave={onLeave}>
      <MessagingSearch onFilter={onFilter} onSearch={onSearch} />

      <StyledContainer className={className} style={style}>
        <MessageList messages={Messages} />
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
  )
}

const StyledContainer = styled.div`
  background-color: rgba(117, 204, 207, 0.4);
  height: calc(100vh - 260px);
  overflow: hidden;
  position: relative;
  .ReactVirtualized__Grid {
    outline: none;
  }
`

MessagingContainer.propTypes = {
  audienceItems: array,
  className: string,
  maxLength: number,
  messages: array.isRequired,
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  onSubmit: func.isRequired,
  style: object
}
