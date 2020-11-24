/**
 * Messaging/Send
 */

// React
import { useRef, useState } from 'react'
import { array, func, number } from 'prop-types'
import {
  MessageNames,
  MessagingCommunicationService,
  MessagingSubscriber
} from 'components/services'
import { convertToRaw } from 'draft-js'
// UI
import { Button, Dropdown, Icon, MessagingInput, useComponentCommunication } from 'components'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ audienceItems, maxLength, mentions, onSubmit }) => {
  // const [open, setOpen] = useState(false)
  const [Message, setMessage] = useState({})

  const [attachments, setAttachments] = useState([])
  const [audience, setAudience] = useState(audienceItems[0] || '')
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
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.SET_ATTACHMENTS_TO_NEW_MESSAGE,
      payload: files
    })
    //
  }

  const handleFilesRecieve = files => {
    setAttachments(files)
  }

  useComponentCommunication({
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
    setMessage(convertToRaw(contentState))
  }
  const isSendDisabled = () => {
    let disabled = false
    if (
      attachments.length === 0 &&
      (Message === {} || (Message.blocks && !Message.blocks[0].text))
    ) {
      disabled = true
    }
    return disabled
  }
  return (
    <>
      <StyledContainer audience={audience}>
        <StyledWrapper>
          {audience && (
            <StyledDropDown
              items={audienceItems}
              onChange={item => setAudience(item)}
              position='top'
            >
              {audience.name}
            </StyledDropDown>
          )}
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
            <Button
              content='Send'
              context='info'
              disabled={isSendDisabled()}
              size='sm'
              onClick={submit}
            />
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

const StyledDropDown = styled(Dropdown)`
  position: absolute;
  left: 8px;
  text-transform: uppercase;
  top: -24px;

  .dropdown--link {
    color: #000;
    font-size: 10px;
  }

  .dropdown--toggle,
  svg {
    color: ${({ theme }) => theme.COLOUR.info};
    font-size: 10px;
  }
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
