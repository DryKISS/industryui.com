/**
 * Messaging/Send
 * Provides a messaging send box, attach, emoji and send button.
 *
 * @features
 * - Dropdown to select audience to send too.
 * - Attach file
 * - Emoji selection
 * - Send button
 * - Write message input
 */

// React
import React, { useState, useRef } from 'react'
import { number, func, array } from 'prop-types'

// UI
import { Button, EmojiMart, Form, Icon, Textarea, Dropdown } from '../../../../'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ audienceItems, onSubmit, maxLength }) => {
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [attachments, setAttachments] = useState([])
  const [audience, setAudience] = useState(audienceItems[0] || '')
  const fileInputRef = useRef()

  const handleOpenPicker = () => {
    setOpen(false)
  }

  const openFileDialog = () => {
    fileInputRef.current.click()
  }

  const handleFilesChange = e => {
    const { files } = e.target
    setAttachments(files)
  }

  const handleEmojiSelect = emoji => {
    setMessage(prev => prev + emoji)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      attachments,
      audience: audience.id,
      message
    }
    onSubmit(data)
    setMessage('')
  }

  return (
    <>
      {open && (
        <StyledPickerContainer>
          <EmojiMart
            handleOpenPicker={handleOpenPicker}
            handleSelect={handleEmojiSelect}
            open={open}
          />
        </StyledPickerContainer>
      )}

      <StyledContainer>
        <StyledForm submit={handleSubmit}>
          {audience && (
            <StyledDropDown
              items={audienceItems}
              position='top'
              onChange={item => setAudience(item)}
            >
              {audience.name}
            </StyledDropDown>
          )}
          <StyledTextarea
            change={e => setMessage(e.target.value)}
            id='message'
            maxLength={maxLength}
            placeholder='Write message'
            rows={1}
            value={message}
          />
          <input
            ref={fileInputRef}
            type='file'
            multiple
            onChange={handleFilesChange}
            style={{ display: 'none' }}
          />
          <StyledElements>
            <StyledIcon fixedWidth={false} icon='paperclip' onClick={openFileDialog} size='2x' />
            <StyledIcon fixedWidth={false} icon='smile' onClick={() => setOpen(!open)} size='2x' />
            <Button
              content='Send'
              context='info'
              size='md'
              type='submit'
              disabled={message.length === 0 && attachments.length === 0}
            />
          </StyledElements>
        </StyledForm>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  color: #c0c0c0;
  padding: 1rem;
  box-sizing: border-box;
`

const StyledPickerContainer = styled(StyledContainer)`
  padding: 0;
`

const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  margin: 0;
`

const StyledTextarea = styled(Textarea)`
  border: none;
  resize: none;

  &:focus {
    border-color: initial;
    box-shadow: initial;
  }
`
const StyledElements = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  margin-right: 1rem;
`

const StyledDropDown = styled(Dropdown)`
  position: absolute;
  top: -15px;
  left: 8px;
  .dropdown--toggle,
  svg {
    color: ${({ theme }) => theme.COLOUR.info};
    /* font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSizes[0]}px; */
    font-size: 10px;
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
