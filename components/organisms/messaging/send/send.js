/**
 * Messaging/Send
 */

// React
import { useRef, useState } from 'react'
import { array, func, number } from 'prop-types'
import {
  MessageNames,
  MessagingComunicationService,
  MessagingSubscriber
} from 'components/services'
import { convertToRaw } from 'draft-js'
// UI
import { Button, MessagingInput, Icon, useComponentComunication } from 'components'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ audienceItems, maxLength, mentions, onSubmit }) => {
  // const [open, setOpen] = useState(false)
  const [Message, setMessage] = useState({})

  const [attachments, setAttachments] = useState([])
  const [audience] = useState(audienceItems[0] || '')
  const fileInputRef = useRef()

  // const message = watch('message')

  // const handleOpenPicker = () => {
  //   setOpen(false)
  // }

  const openFileDialog = () => {
    fileInputRef.current.click()
  }

  const handleFilesChange = e => {
    const { files } = e.target
    MessagingComunicationService.send({
      name: MessageNames.Messaging.SET_ATTACHMENTS_TO_NEW_MESSAGE,
      payload: files
    })
    //
  }

  const handleFilesRecieve = files => {
    setAttachments(files)
  }

  useComponentComunication({
    dependencies: [attachments.length],
    messageName: MessageNames.Messaging.SET_ATTACHMENTS_TO_NEW_MESSAGE,
    onRecieve: handleFilesRecieve,
    subscriber: MessagingSubscriber
  })

  // const handleEmojiSelect = emoji => {
  //   setValue('message', message + emoji)
  // }

  const submit = form => {
    const data = {
      attachments,
      audience: audience.id,
      message: Message
    }
    onSubmit(data)
  }

  const handleInputChange = e => {
    const contentState = e.getCurrentContent()
    console.log(convertToRaw(contentState))
    setMessage(convertToRaw(contentState))
  }

  return (
    <>
      <StyledContainer audience={audience}>
        <StyledWrapper>
          <MessagingInput mentions={mentions} onChange={handleInputChange} />

          <input
            multiple
            onChange={handleFilesChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type='file'
          />
          <StyledElements>
            <StyledIcon fixedWidth={false} icon='paperclip' onClick={openFileDialog} size='2x' />
            <Button content='Send' context='info' size='sm' onClick={submit} />
          </StyledElements>
        </StyledWrapper>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  box-sizing: border-box;
  color: #c0c0c0;
  padding: ${({ audience }) => (audience ? '1.5rem 1rem 1rem' : '1rem')};
  position: relative;
`

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0;
`

const StyledElements = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    color: ${({ theme }) => theme.COLOUR.info};
  }
`

MessagingSend.propTypes = {
  audienceItems: array,
  onSubmit: func.isRequired,
  maxLength: number
}

MessagingSend.defaultProps = {
  audienceItems: [],
  maxLength: 320
}
