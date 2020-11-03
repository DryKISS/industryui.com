/**
 * Messaging/Container
 */

// React
import { useState } from 'react'
import { array, object, string, func, number } from 'prop-types'

// UI
import {
  DragAndDropable,
  MessageList,
  MessagingDragHover,
  MessagingSearch,
  MessagingSend
} from 'components'

// Style
import styled from 'styled-components'

export const MessagingContainer = ({
  audienceItems,
  className,
  maxLength,
  messages,
  onFilter,
  onSearch,
  onSubmit,
  style
}) => {
  const [IsDragHoverOpen, setIsDragHoverOpen] = useState(false)
  const [Files, setFiles] = useState([])
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

  return (
    <DragAndDropable onHover={onHover} onLeave={onLeave} onFileDrop={onDrop}>
      <MessagingSearch onFilter={onFilter} onSearch={onSearch} />

      <StyledContainer className={className} style={style}>
        <MessageList messages={messages} />
      </StyledContainer>

      <MessagingSend audienceItems={audienceItems} onSubmit={onSubmit} maxLength={maxLength} />
      <MessagingDragHover
        files={Files}
        handleRemoveFile={handleRemoveFile}
        isOpen={IsDragHoverOpen}
        onClose={closeHoverPopup}
      />
    </DragAndDropable>
  )
}

const StyledContainer = styled.div`
  background-color: rgba(117, 204, 207, 0.4);
  max-height: calc(100vh - 260px);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  position: relative;
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
