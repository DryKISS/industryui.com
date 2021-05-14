/**
 * Messaging/Base
 */

// React
import React, { useRef, useState } from 'react'
import { any, string } from 'prop-types'

// UI

import Avatar from '../../../../../atoms/avatar/avatar'
import { AudioWrapper } from '../../audioPlayer/wrapper'
import Card from '../../../../../molecules/card/card'
import Column from '../../../../../atoms/grid/Column'
import Dropdown from '../../../../../molecules/dropdown/dropdown'
import { hashtagPlugin } from '../../../draftPlugins/hashtag/index'
import Icon from '../../../../../atoms/icon/icon/icon'
import Image from '../../../../../atoms/image/image'
import { linkifyPlugin } from '../../../draftPlugins/components/link'
import { MentionComponent } from '../../../draftPlugins/components/mention'
import {
  MessageNames,
  MessagingActions
} from '../../../../../services/componentCommunication/messageNames'
import MessagingAudioPlayer from '../../../components/audioPlayer/index'
import { MessagingCommunicationService } from '../../../../../services/componentCommunication/componentCommunication'
import MessagingEditor from '../../../draftPlugins/index'
import Preview from '../../../../../molecules/preview/preview'
import ReplyContainer from '../../reply/index'
import Row from '../../../../../atoms/grid/Row'
import TranslationService from ''

import { MessageIcon } from './icon'
import { MessageTo } from './to'
import { MenuIcon } from './menuIcon'
import { Loadingspinner } from './loadingSpinner'
import { EditorState, ContentState, convertFromRaw } from 'draft-js'
import createMentionPlugin from 'draft-js-mention-plugin'
import createEmojiPlugin from '@draft-js-plugins/emoji'

// Style
import styled, { css } from 'styled-components'

const mentionPlugin = createMentionPlugin({
  mentionComponent: (mentionProps) => <MentionComponent mentionProps={mentionProps} />
})

const emojiPlugin = createEmojiPlugin()

export const MessageBase = ({
  attachments,
  avatar,
  content,
  from,
  hasMenu,
  hasText,
  hovered,
  icon,
  id,
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

  const [showingTranslation, setShowingTranslation] = useState(false)
  const [loadingTranslation, setloadingTranslation] = useState(false)
  const translated = useRef(null)

  const toggleTranslation = async () => {
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
        const { response } = await TranslationService.Translate(plainText)
        translated.current = EditorState.createWithContent(ContentState.createFromText(response))
        setEditorState(translated.current)
        setShowingTranslation(true)
        setloadingTranslation(false)
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
          files,
          selectedIndex: index,
          avatar: av,
          from,
          time
        }
      }
    })
  }

  return (
    <MessageWrapper type={type} hovered={hovered}>
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

      <StyledCard type={type}>
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
            {showingTranslation ? 'See Original' : 'See Translation'}
            {loadingTranslation && <Loadingspinner />}
          </TranslatorWrapper>
        )}

        {attachments && attachments.length > 0 && (
          <AttachmentsContainer>
            {Array.from(attachments).forEach((item, index) => {
              if (index < 4) {
                return (
                  <SingleAttachment key={index} onClick={() => handleFileClick(attachments, index)}>
                    {attachments.length > 4 && index === 3 && (
                      <OverlayForAdditionalMessages>
                        +{attachments.length - 4}
                      </OverlayForAdditionalMessages>
                    )}

                    <Preview
                      dim={attachments.length > 4 && index === 3}
                      imageStyles={{
                        minHeight: '10rem',
                        height: '10rem',
                        objectFit: 'cover'
                      }}
                      file={item}
                      message
                    />
                  </SingleAttachment>
                )
              }
            })}
          </AttachmentsContainer>
        )}
      </StyledCard>
    </MessageWrapper>
  )
}

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
