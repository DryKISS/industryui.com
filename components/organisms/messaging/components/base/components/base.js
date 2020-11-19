/**
 * Messaging/Base
 */

// React
import { useRef, useState } from 'react'
import { any, bool, string } from 'prop-types'

// UI
import {
  Card,
  Column,
  hashtagPlugin,
  Icon,
  Image,
  linkifyPlugin,
  MentionComponent,
  MessagingEditor,
  Preview,
  Row
} from 'components'
import { MessageIcon } from './icon'
import { MessageTo } from './to'
import { EditorState, ContentState, convertFromRaw } from 'draft-js'
import createMentionPlugin from 'draft-js-mention-plugin'

// Style
import styled from 'styled-components'
const mentionPlugin = createMentionPlugin({
  mentionComponent: mentionProps => <MentionComponent mentionProps={mentionProps} />
})

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
  type
}) => {
  const messageRef = useRef(null)

  const [editorState, seteditorState] = useState(
    EditorState.createWithContent(
      content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)
    )
  )

  return (
    <Column sm={11} columnRef={messageRef}>
      <StyledCard type={type}>
        <Row>
          <Column sm={6}>
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
              <MessagingEditor
                plugins={[hashtagPlugin, linkifyPlugin, mentionPlugin]}
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
    </Column>
  )
}
const SingleAttachment = styled.div``
const AttachmentsContainer = styled.div``

const StyledCard = styled(Card)`
  background-color: ${({ type }) => (type === 'in' ? '#fff' : '#F7F7F7')};
  border-radius: 1rem;
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
  margin-bottom: 0.5rem;
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
