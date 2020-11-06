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
import {
  Button,
  Dropdown,
  EmojiMart,
  Form,
  MessagingInput,
  Icon,
  TextareaField,
  useComponentComunication,
  useForm
} from 'components'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ audienceItems, maxLength, mentions, onSubmit }) => {
  const { errors, handleSubmit, register, setValue, watch } = useForm({
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

  const handleInputChange = e => {
    const contentState = e.getCurrentContent()
    console.log(convertToRaw(contentState))
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
              onChange={item => setAudience(item)}
              position='top'
            >
              {audience.name}
            </StyledDropDown>
          )}
          <MessagingInput mentions={mentions} onChange={handleInputChange} />
          <StyledTextarea
            errors={errors}
            maxLength={maxLength}
            name='message'
            placeholder='Write message'
            register={register}
            rows={2}
          />

          <input
            multiple
            onChange={handleFilesChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type='file'
          />

          <StyledElements>
            <StyledIcon fixedWidth={false} icon='paperclip' onClick={openFileDialog} size='2x' />
            <StyledIcon fixedWidth={false} icon='smile' onClick={() => setOpen(!open)} size='2x' />

            <Button
              content='Send'
              context='info'
              disabled={message.length === 0 && attachments.length === 0}
              size='sm'
              type='submit'
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
  box-sizing: border-box;
  color: #c0c0c0;
  padding: ${({ audience }) => (audience ? '1.5rem 1rem 1rem' : '1rem')};
  position: relative;
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
  display: none;
  background-color: ${({ theme }) => theme.COLOUR.light};
  border: ${({ theme }) => theme.COLOUR.light};
  border-radius: 1rem;
  line-height: 1.5;
  resize: none;
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.5rem;

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

MessagingSend.propTypes = {
  audienceItems: array,
  onSubmit: func.isRequired,
  maxLength: number
}

MessagingSend.defaultProps = {
  audienceItems: [],
  maxLength: 320
}
