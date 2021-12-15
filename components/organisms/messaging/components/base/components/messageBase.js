/**
 * Messaging/Base
 */

// React
import React, { useRef, useState, useEffect } from 'react'
import { any, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import Avatar from '../../../../../atoms/avatar/avatar'
import AudioWrapper from '../../../../../molecules/audioPlayer/wrapper'
import Card from '../../../../../molecules/card/card'
import Column from '../../../../../atoms/grid/Column'
import Dropdown from '../../../../../molecules/dropdown/dropdown'
import hashtagPlugin from '../../../../../organisms/editor/draftJs/plugins/hashtag/hashtagPlugin'
import Icon from '../../../../../atoms/icon/icon/icon'
import Image from '../../../../../atoms/image/image'
import linkifyPlugin from '../../../../../organisms/editor/draftJs/plugins/components/linkPluginComponent'
import MentionComponent from '../../mention/mentionComponent'
import MessagingAudioPlayer from '../../../../../molecules/audioPlayer/audioPlayer'
import MessageNames from '../../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../../organisms/messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../../../services/componentCommunication/messaging/service'
import { MessagingEditor } from '../../../../../organisms/editor/draftJs/plugins/index'
import Preview from '../../../../../molecules/preview/preview'
import ReplyContainer from '../../replyContainer/replyContainer'
import Row from '../../../../../atoms/grid/Row'
import TranslationService from '../../../../../services/translation/translation'
import MessageIcon from './messageIcon'
import MessageTo from './messageTo'
import MenuIcon from './menuIcon'
import Loadingspinner from './loadingSpinner'
import { EditorState, ContentState, convertFromRaw } from 'draft-js'
import createMentionPlugin from 'draft-js-mention-plugin'
import createEmojiPlugin from '@draft-js-plugins/emoji'
import EmailContainer from '../../emailContainer/emailContainer'

const mentionPlugin = createMentionPlugin({
  mentionComponent: (mentionProps) => <MentionComponent mentionProps={mentionProps} />
})

const emojiPlugin = createEmojiPlugin()

const MessageBase = ({
  attachments,
  avatar,
  content,
  email,
  from,
  hasMenu,
  hasText,
  hovered,
  icon,
  id,
  isSending,
  more,
  pictureId,
  prevType,
  reply,
  replyTo,
  statusText,
  time,
  to,
  type,
  voice
}) => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)
    )
  )

  useEffect(() => {
    setEditorState(
      EditorState.createWithContent(
        content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)
      )
    )
    return () => {}
  }, [content])

  const [showingTranslation, setShowingTranslation] = useState(false)
  const [loadingTranslation, setloadingTranslation] = useState(false)
  const [translationError, setTranslationError] = useState(false)
  const translated = useRef(null)
  const toggleTranslation = async () => {
    setTranslationError(false)
    if (!showingTranslation) {
      if (!translated.current) {
        setloadingTranslation(true)
        let plainText
        if (content.blocks) {
          plainText = content.blocks
            .map((block) => (!block.text.trim() && '\n') || block.text)
            .join('\n')
        } else {
          plainText = content
        }
        try {
          const { response } = await TranslationService(plainText)
          translated.current = EditorState.createWithContent(ContentState.createFromText(response))
          setEditorState(translated.current)
          setShowingTranslation(true)
          setloadingTranslation(false)
        } catch (e) {
          setTranslationError(true)
          setShowingTranslation(false)
          setloadingTranslation(false)
        }
      } else {
        setEditorState(translated.current)
        setShowingTranslation(true)
      }
    } else {
      setEditorState(
        EditorState.createWithContent(
          content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)
        )
      )
      setShowingTranslation(false)
    }
  }
  const dropDownAction = (item) => {
    let action = ''
    switch (item.id) {
      case 'edit':
        action = MessagingActions.EDIT_MESSAGE
        break
      case 'delete':
        action = MessagingActions.DELETE_MESSAGE
        break
      case 'star':
        action = MessagingActions.STAR_MESSAGE
        break

      default:
        break
    }
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action,
        data: {
          attachments,
          content,
          from,
          hovered,
          icon,
          id,
          more,
          pictureId,
          prevType,
          reply,
          statusText,
          time,
          to,
          type,
          voice
        }
      }
    })
  }

  const handleFileClick = (files, index) => {
    const av = avatar ? <Avatar size="xxs" src={avatar} /> : <Avatar size="xxs" content={from[0]} />

    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          avatar: av,
          files,
          from,
          isAdding: false,
          isClearData: false,
          isPreview: true,
          selectedIndex: index,
          time
        }
      }
    })
  }

  const renderAttachments = (attachments) => {
    const elements = []
    Array.from(attachments).forEach((item, index) => {
      if (index < 4) {
        elements.push(
          <SingleAttachment key={index} onClick={() => handleFileClick(attachments, index)}>
            {attachments.length > 4 && index === 3 && (
              <OverlayForAdditionalMessages>+{attachments.length - 4}</OverlayForAdditionalMessages>
            )}

            <Preview
              dim={attachments.length > 4 && index === 3}
              imageStyles={{
                minHeight: '10rem',
                height: '10rem',
                borderRadius: '6px',
                objectFit: 'cover'
              }}
              file={item}
              message
            />
          </SingleAttachment>
        )
      }
    })
    return elements
  }
  const header = (
    <StyledHead type={type}>
      <StyledHeadText type={type}>
        {from} <Dot />
        {time.split(' ')[time.split(' ').length - 1]}
      </StyledHeadText>

      {hasMenu && (
        <MenuWrapper>
          <Dropdown
            caret={false}
            items={[
              { name: 'Star Message', id: 'star' },
              { name: 'Edit Message', id: 'edit' },
              { name: 'Delete Message', id: 'delete' }
            ]}
            position="bottom"
            onChange={(item) => dropDownAction(item)}
          >
            <MenuIcon />
          </Dropdown>
        </MenuWrapper>
      )}
    </StyledHead>
  )
  return (
    <MessageWrapper type={type} hovered={hovered}>
      {header}
      <StyledCard type={type}>
        {isSending && (
          <IsSendingWrapper>
            <Loadingspinner size={20} />
          </IsSendingWrapper>
        )}
        <Row>
          <Column
            sm={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '-0.5rem'
            }}
          >
            <MessageIcon icon={icon} />
            {to && <MessageTo to={to} />}
            <StyledReply>{reply}</StyledReply>
          </Column>
        </Row>
        <Row>
          {pictureId && (
            <Column sm={2}>
              <Image alt="Image" src={pictureId} />
            </Column>
          )}

          <Column sm={pictureId ? 8 : !type ? 11 : 12}>
            {replyTo && <ReplyContainer message={replyTo} inMessage onClose={null} />}
            <StyledContent>
              {voice && (
                <AudioWrapper>
                  <MessagingAudioPlayer src={voice} inMessage />
                </AudioWrapper>
              )}
              {email && <EmailContainer email={email} header={header} />}
              {hasText && (
                <MessagingEditor
                  plugins={[emojiPlugin, hashtagPlugin, linkifyPlugin, mentionPlugin]}
                  onChange={(e) => setEditorState(e)}
                  editorState={editorState}
                  readOnly
                />
              )}
            </StyledContent>
          </Column>

          {!type && (
            <Column sm={1}>
              <Icon color={statusText === 'Delivered' ? 'green' : '#bbb'} icon="check-circle" />
            </Column>
          )}
        </Row>

        {type === 'in' && hasText && (
          <TranslatorWrapper onClick={toggleTranslation}>
            {translationError
              ? 'Translation Error'
              : showingTranslation
              ? 'See Original'
              : 'See Translation'}
            {loadingTranslation && <Loadingspinner />}
          </TranslatorWrapper>
        )}

        {attachments && attachments.length > 0 && (
          <AttachmentsContainer>{renderAttachments(attachments)}</AttachmentsContainer>
        )}
      </StyledCard>
    </MessageWrapper>
  )
}

const IsSendingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

const OverlayForAdditionalMessages = styled.div`
  align-items: center;
  color: white;
  display: flex;
  height: 40%;
  font-size: 5rem;
  position: absolute;
  justify-content: center;
  width: 40%;
  z-index: 1;
`

const StyledHeadText = styled.div`
  display: flex;
  align-items: center;
  ${({ type }) =>
    type === 'out' &&
    css`
      flex-direction: row-reverse;
    `}
`

const TranslatorWrapper = styled.div`
  align-items: center;
  color: ${({ theme: { MESSAGING } }) => MESSAGING.translatorTextColour};
  cursor: pointer;
  display: flex;
  font-size: 0.625rem;
  font-weight: 600;
  width: fit-content;
`

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: -1rem;
  margin-bottom: -1rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
`

const SingleAttachment = styled.div`
  cursor: pointer;
  overflow: hidden;
  max-width: calc(90% - 0.5rem);
`

const AttachmentsContainer = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-row: auto auto;
  grid-row-gap: 1rem;
`

const MessageWrapper = styled.div`
  flex: 1;
  margin-top: 1.5rem;
  max-width: 80%;
  ${({ type }) =>
    type === 'out' &&
    css`
      margin-left: 20%;
    `}
  ${({ hovered }) =>
    hovered &&
    css`
      ${MenuWrapper} {
        opacity: 1;
        pointer-events: inherit;
      }
    `}
`

const StyledCard = styled(Card)`
  background-color: ${({ type, theme: { MESSAGING } }) =>
    type === 'in' ? MESSAGING.receivedMessageBackground : MESSAGING.sentMessageBackground};
  border: 1px solid ${({ theme: { MESSAGING } }) => MESSAGING.messageBorderColour};
  border-radius: ${({ type }) => (type === 'out' ? '1rem 0 1rem 1rem' : '0 1rem 1rem 1rem')};
  margin-bottom: 0.5rem;
  padding: 1.25rem 1rem;
  position: relative;
`

const StyledContent = styled.div`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.messageContentColour};
  font-size: ${({ theme: { MESSAGING } }) => MESSAGING.messageFontSize};
`

const StyledReply = styled.div`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.messageReplyTextColour};
  font-size: 0.75rem;
`

const StyledHead = styled.span`
  align-items: center;
  color: ${({ theme: { MESSAGING } }) => MESSAGING.fromTextColour};
  display: flex;
  font-size: 0.75rem;
  font-weight: 600;
  justify-content: space-between;
  position: absolute;
  text-align: right;
  top: 0.25rem;
  ${({ type }) =>
    type === 'out'
      ? css`
          flex-direction: row-reverse;
          right: 3.25rem;
          width: 73%;
        `
      : css`
          left: 3.25rem;
          width: 80%;
        `}
`

const Dot = styled.div`
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.fromTextColour};
  border-radius: 1rem;
  height: 0.25rem;
  margin: 0.25rem;
  width: 0.25rem;
`

MessageBase.propTypes = {
  content: any,
  pictureId: string,
  statusText: string,
  time: string,
  type: string
}
export default MessageBase
