/**
 * Messaging/Base
 */

// React
import { useState } from 'react'
import { any, bool, string } from 'prop-types'

// UI
import {
  AudioWrapper,
  Card,
  Column,
  hashtagPlugin,
  Icon,
  Image,
  linkifyPlugin,
  MentionComponent,
  IUIMessagingAudioPlayer,
  MessagingEditor,
  Preview,
  Row
} from 'components'
import { MessageIcon } from './icon'
import { MessageTo } from './to'
import { MenuIcon } from './menuIcon'
import { EditorState, ContentState, convertFromRaw } from 'draft-js'
import createMentionPlugin from 'draft-js-mention-plugin'
import createEmojiPlugin from 'draft-js-emoji-plugin'

// Style
import styled from 'styled-components'

const mentionPlugin = createMentionPlugin({
  mentionComponent: mentionProps => <MentionComponent mentionProps={mentionProps} />
})

const emojiPlugin = createEmojiPlugin()

export const MessageBase = ({
  attachments,
  content,
  from,
  icon,
  more,
  pictureId,
  prevType,
  reply,
  statusText,
  time,
  to,
  type,
  voice
}) => {
  const [editorState, seteditorState] = useState(
    EditorState.createWithContent(
      content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)
    )
  )
  return (
    <MessageWrapper>
      <StyledCard type={type}>
        <Row>
          <Column sm={6} style={{ display: 'flex', alignItems: 'center', marginTop: '-0.5rem' }}>
            <MenuWrapper>
              <MenuIcon />
            </MenuWrapper>
            <MessageIcon icon={icon} />
            {to && <MessageTo to={to} />}
            <StyledTime>{time}</StyledTime>
          </Column>

          <Column sm={6}>
            <StyledFrom>{from}</StyledFrom>
          </Column>
        </Row>

        <Row>
          {pictureId && (
            <Column sm={2}>
              <Image alt='Image' src={pictureId} />
            </Column>
          )}

          <Column sm={pictureId ? 8 : !type ? 11 : 12}>
            <StyledReply>{reply}</StyledReply>
            <StyledContent>
              {voice && (
                <AudioWrapper>
                  <IUIMessagingAudioPlayer src={voice} inMessage />
                </AudioWrapper>
              )}

              <MessagingEditor
                plugins={[emojiPlugin, hashtagPlugin, linkifyPlugin, mentionPlugin]}
                onChange={e => seteditorState(e)}
                editorState={editorState}
                readOnly
              />
            </StyledContent>
          </Column>

          {!type && (
            <Column sm={1}>
              <Icon color={statusText === 'Delivered' ? 'green' : '#bbb'} icon='check-circle' />
            </Column>
          )}
        </Row>
        {attachments && attachments.length > 0 && (
          <AttachmentsContainer>
            {Array.from(attachments).map((item, index) => {
              return (
                <SingleAttachment key={index}>
                  <Preview
                    imageStyles={{ minHeight: '10rem', height: '10rem', width: 'unset' }}
                    file={item}
                  />
                </SingleAttachment>
              )
            })}
          </AttachmentsContainer>
        )}
      </StyledCard>
    </MessageWrapper>
  )
}
const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
`
const SingleAttachment = styled.div``
const AttachmentsContainer = styled.div``

const MessageWrapper = styled.div`
  flex: 1;
  margin-top: 1.5rem;
`

const StyledCard = styled(Card)`
  background-color: ${({ type, theme }) =>
    type === 'in' ? theme.COLOUR.neutral : theme.COLOUR.neutral2};
  border: 1px solid ${({ theme }) => theme.COLOUR.grey80};
  border-radius: ${({ type }) => (type === 'out' ? '1rem 0 1rem 1rem' : '0 1rem 1rem 1rem')};
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
`

const StyledContent = styled.div`
  color: #000;
`

const StyledReply = styled.div`
  color: #696969;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`

const StyledTime = styled.span`
  color: ${({ theme }) => theme.COLOUR.primary};
  font-size: 0.75rem;
`

const StyledFrom = styled(StyledTime)`
  display: block;
  text-align: right;
`

MessageBase.propTypes = {
  content: any,
  pictureId: string,
  scrollToMessage: bool,
  statusText: string,
  time: string,
  type: string
}
