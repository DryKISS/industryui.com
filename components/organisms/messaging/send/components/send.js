/**
 * Messaging/Send
 */

// React
import React, { useState, useRef } from 'react'
import { number, func, array } from 'prop-types'

// Form
import { useForm } from 'react-hook-form'

// UI
import { Button, EmojiMart, Form, Icon, TextareaField, Dropdown } from '../../../../'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ audienceItems, onSubmit, maxLength }) => {
  const { handleSubmit, register, setValue, watch } = useForm({
    defaultValues: {
      message: ''
    }
  })

  const [open, setOpen] = useState(false)
  const [attachments, setAttachments] = useState([])
  const [audience, setAudience] = useState(audienceItems[0] || '')
  const fileInputRef = useRef()

  const message = watch('message')

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
    setValue('message', message + emoji)
  }

  const submit = form => {
    const data = {
      attachments,
      audience: audience.id,
      message: form.message
    }

    onSubmit(data)
    setValue('message', '')
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

      <StyledContainer audience={audience}>
        <StyledForm handleSubmit={handleSubmit(submit)}>
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
            register={register}
            name='message'
            maxLength={maxLength}
            placeholder='Write message'
            rows={1}
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
  padding: ${({ audience }) => (audience ? '1.5rem 1rem 1rem' : '1rem')};
  position: relative;
  box-sizing: border-box;
`

const StyledPickerContainer = styled(StyledContainer)`
  bottom: 80px;
  left: 15px;
  padding: 0;
  position: absolute;
  right: 15px;
  z-index: 999;
`

const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  margin: 0;

  .Form-feedback {
    width: inherit;
  }
`

const StyledTextarea = styled(TextareaField)`
  border: none;
  line-height: 1.5;
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

  &:hover {
    color: ${({ theme }) => theme.COLOUR.info};
  }
`

const StyledDropDown = styled(Dropdown)`
  position: absolute;
  text-transform: uppercase;
  top: -24px;
  left: 8px;

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

MessagingSend.propTypes = {
  audienceItems: array,
  onSubmit: func.isRequired,
  maxLength: number
}

MessagingSend.defaultProps = {
  audienceItems: [],
  maxLength: 320
}
