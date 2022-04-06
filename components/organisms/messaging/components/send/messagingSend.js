/**
 * Messaging/Send
 */

// React
import React, { useState } from 'react'
import { array, func, number } from 'prop-types'

// DraftJS
import { convertToRaw } from 'draft-js'

// Style
import styled from 'styled-components'

// UI
import AudioWrapper from '../../../../molecules/audioPlayer/wrapper'
import Button from '../../../../atoms/button/button/button'
import Dropdown from '../../../../molecules/dropdown/dropdown'
import { EmojiSelect, EmojiSuggestions } from '../../../../organisms/editor/draftJs/plugins/index'
import Icon from '../../../../atoms/icon/icon/icon'
import VoiceRecorder from '../../../../molecules/voiceRecorder/voiceRecorder'
import MessagingInput from '../../components/input/input'
import MessagingAudioPlayer from '../../../../molecules/audioPlayer/audioPlayer'
import PaperPlaneIcon from '../../../../icons/components/paperPlane'
import ReplyContainer from '../../components/replyContainer/replyContainer'
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../organisms/messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../../services/componentCommunication/messaging/service'
import MessagingSubscriber from '../../../../services/componentCommunication/messaging/subscriber'

import useComponentCommunication from '../../../../hooks/useComponentCommunication/useSubscription'

const MessagingSend = ({ audienceItems, maxLength, mentions, onSubmit }) => {
  const [Message, setMessage] = useState({})
  const [attachments, setAttachments] = useState([])
  const [voiceMessage, setVoiceMessage] = useState(null)
  const [audience, setAudience] = useState(audienceItems[0] || '')

  const openFileDialog = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: [],
          isAdding: true,
          isPreview: false,
          isClearData: false,
          selectedIndex: 0
        }
      }
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const [replyMessage, setreplyMessage] = useState(null)

  const onActionRecieved = (payload) => {
    switch (payload.action) {
      case MessagingActions.SET_ATTACHMENTS_TO_NEW_MESSAGE:
        setAttachments(payload.data)
        setAudience(audienceItems[0] || '')
        break
      case MessagingActions.NEW_MESSAGES:
        setAudience(audienceItems[0] || '')
        break
      case MessagingActions.REPLY_MESSAGE:
        setreplyMessage(payload.data)
        break

      default:
        break
    }
  }

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: (e) => onActionRecieved(e),
    subscriber: MessagingSubscriber
  })

  const submit = () => {
    replyMessage?.replyTo && delete replyMessage.replyTo
    const data = {
      attachments,
      audience: audience.id,
      message: Message,
      ...(voiceMessage && { voice: voiceMessage }),
      ...(replyMessage && { replyTo: replyMessage })
    }

    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: null,
          isAdding: false,
          isPreview: false,
          isClearData: true,
          selectedIndex: 0
        }
      }
    })

    onSubmit(data)
    setVoiceMessage(null)
    setreplyMessage(null)
  }

  const handleInputChange = (e) => {
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
    setVoiceMessage(null)
  }

  const handleVoiceRecord = (e) => {
    setVoiceMessage(e.data)
  }

  return (
    <>
      <StyledContainer audience={audience}>
        {replyMessage && (
          <ReplyContainer message={replyMessage} onClose={() => setreplyMessage(null)}>
            {replyMessage.id}
          </ReplyContainer>
        )}

        <StyledWrapper>
          {audience && (
            <StyledDropDown
              items={audienceItems}
              onChange={(item) => setAudience(item)}
              position="top"
            >
              {audience.name}
            </StyledDropDown>
          )}

          <StyledElements>
            <StyledIcon fixedWidth={false} icon="paperclip" onClick={openFileDialog} size="lg" />
            <EmojiSelectWrapper>
              <EmojiSuggestions />
              <EmojiSelect />
            </EmojiSelectWrapper>
          </StyledElements>

          {voiceMessage && (
            <AudioWrapper preview>
              <MessagingAudioPlayer src={URL.createObjectURL(voiceMessage)} />
              <DeleteIconWrapper onClick={handleDeleteVoiceClick}>
                <Icon context="danger" icon="trash" size="lg" />
              </DeleteIconWrapper>
            </AudioWrapper>
          )}

          <MessagingInput mentions={mentions} onChange={handleInputChange} />

          <SendActionsWrapper>
            {isSendDisabled() ? (
              <VoiceRecorder onVoiceRecord={handleVoiceRecord} />
            ) : (
              <Button
                context="transparent"
                disabled={isSendDisabled()}
                noPadding
                onClick={submit}
                size="xs"
              >
                <PaperPlaneIcon hoverColour />
              </Button>
            )}
          </SendActionsWrapper>
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
  .ejr02pv {
    top: -400px;
    left: -10px;
  }
  .esyutjr {
    top: -350px !important;
  }
  .e8k2yoa {
    background-color: transparent !important;
    border: none;
    color: ${({ theme: { MESSAGING } }) => MESSAGING.inputIconsColour};
    font-size: 2rem;
    font-weight: 700;
    height: unset;
    margin-top: -5px;
    margin-right: 5px;
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
const SendActionsWrapper = styled(StyledElements)`
  width: 3rem;
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
  margin-right: 0.2rem;
  margin-top: 3px;
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
export default MessagingSend
