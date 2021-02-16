// React
import React from 'react'

// React Dropzone
import { useDropzone } from 'react-dropzone'

// Style
import styled from 'styled-components'

export const DragAndDropable = ({ children, onFileDrop, onHover, onLeave }) => {
  const onDragEnter = () => {
    onHover()
  }
  const onDragLeave = () => {
    onLeave()
  }
  const onDrop = e => {
    onFileDrop(e)
  }

  const { getRootProps, isDragAccept, isDragActive, isDragReject } = useDropzone({
    onDrop,
    onDragEnter,
    onDragLeave
  })

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      {children}
    </Container>
  )
}
const Container = styled.div`
  overflow: hidden;
  position: relative;
  outline: none;
  * {
    &::-webkit-scrollbar {
      width: 0.25rem;
      background-color: ${({ theme: { MESSAGING } }) => MESSAGING.scrollBarColour};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${({ theme: { MESSAGING } }) => MESSAGING.scrollThumbColour};
    }
  }
`
