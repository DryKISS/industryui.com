/**
 * Messaging/Send
 */

// React
import { useRef, useState } from 'react'
import { array, func, number } from 'prop-types'

import {
  MessageNames,
  MessagingActions,
  MessagingCommunicationService,
  MessagingSubscriber
} from 'components/services'

import { PaperPlane } from './paperPlane'

import { convertToRaw } from 'draft-js'

// UI
import {
  AudioWrapper,
  Button,
  Dropdown,
  EmojiSelect,
  EmojiSuggestions,
  Icon,
  VoiceRecorder,
  MessagingInput,
  MessagingAudioPlayer,
  useComponentCommunication
} from 'components'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ audienceItems, maxLength, mentions, onSubmit }) => {
  // const [open, setOpen] = useState(false)
  const [Message, setMessage] = useState({})
  const [attachments, setAttachments] = useState([])
  const [voiceMessage, setvoiceMessage] = useState(null)
  const [audience, setAudience] = useState(audienceItems[0] || '')
  const fileInputRef = useRef()

  const openFileDialog = () => {
    fileInputRef.current.click()
  }

  const handleFilesChange = e => {
    const { files } = e.target
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: { action: MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE, data: files }
    })
  }

  const onActionRecieved = payload => {
    switch (payload.action) {
      case MessagingActions.SET_RECORDED_VOICE:
        setvoiceMessage(payload.data)
        break
      case MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE:
        setAttachments(payload.data)
        break

      default:
        break
    }
  }

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: e => onActionRecieved(e),
    subscriber: MessagingSubscriber
  })

  const submit = form => {
    const data = {
      attachments,
      audience: audience.id,
      message: Message,
      ...(voiceMessage && { voice: voiceMessage })
    }

    onSubmit(data)
    setvoiceMessage(null)
  }

  const handleInputChange = e => {
    const contentState = e.getCurrentContent()
    setMessage(convertToRaw(contentState))
  }
  const isSendDisabled = () => {
    let disabled = false
    if (
      attachments.length === 0 &&
      (Message === {} || (Message.blocks && !Message.blocks[0].text && voiceMessage === null))
    ) {
      disabled = true
    }
    return disabled
  }
  const handleDeleteVoiceClick = () => {
    setvoiceMessage(null)
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
          <StyledElements>
            <EmojiSelectWrapper>
              <EmojiSuggestions />
              <EmojiSelect />
            </EmojiSelectWrapper>
            <StyledIcon fixedWidth={false} icon='paperclip' onClick={openFileDialog} size='lg' />
          </StyledElements>

          {voiceMessage && (
            <AudioWrapper preview>
              <MessagingAudioPlayer src={URL.createObjectURL(voiceMessage)} />
              <DeleteIconWrapper onClick={handleDeleteVoiceClick}>
                <Icon context='danger' icon='trash' prefix='fas' size='lg' />
              </DeleteIconWrapper>
            </AudioWrapper>
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
            {isSendDisabled() ? (
              <VoiceRecorder />
            ) : (
              <Button
                context='transparent'
                disabled={isSendDisabled()}
                noPadding
                onClick={submit}
                size='xs'
              >
                <PaperPlane />
              </Button>
            )}
          </StyledElements>
        </StyledWrapper>
      </StyledContainer>
    </>
  )
}

const DeleteIconWrapper = styled.div`
  padding-top: 1rem;
  padding-top: 0.5rem;
  cursor: pointer;
`

const EmojiSelectWrapper = styled.div`
  [class*='emojiSelectPopover_'] {
    top: -400px;
    left: -10px;
  }
  [class*='emojiSuggestions'] {
    top: -350px !important;
  }
  [class*='draftJsEmojiPlugin__emojiSelectButton_'] {
    background-color: transparent !important;
    border: none;
    color: ${({ theme: { MESSAGING } }) => MESSAGING.inputIconsColour};
    font-size: 2.5rem;
    font-weight: 600;
    height: unset;
    margin-top: -5px;
    margin-right: 3px;
    &:hover {
      color: ${({ theme: { MESSAGING } }) => MESSAGING.inpotIconsHoverColour};
    }
    width: unset;
  }
`
const StyledElements = styled.div`
  align-items: center;
  display: flex;
  place-content: space-evenly;
  width: 4rem;
`

const StyledContainer = styled.div`
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.inputSectionBackground};
  border-bottom: 1px solid #c0c0c0;
  border-top: 1px solid #c0c0c0;
  box-sizing: border-box;
  color: #c0c0c0;
  padding: ${({ audience }) => (audience ? '1.5rem 1rem 1rem' : '1rem')};
  position: relative;
  .public-DraftStyleDefault-block {
    margin: 0.5em 0;
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
const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  margin-right: 1rem;
  color: ${({ theme: { MESSAGING } }) => MESSAGING.inputIconsColour};
  &:hover {
    color: ${({ theme: { MESSAGING } }) => MESSAGING.inpotIconsHoverColour};
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
