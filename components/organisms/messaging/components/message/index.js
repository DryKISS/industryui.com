/**
 * Messaging/Message
 */

// React
import { memo, useState } from 'react'
import styled, { css } from 'styled-components'
import { object, string } from 'prop-types'
import { ReplyIcon } from './replyIcon'
import { ShareIcon } from './shareIcon'

// UI
import { Avatar, MessageBase } from 'components'
import { MessageNames, MessagingActions, MessagingCommunicationService } from 'components/services'

export const Message = memo(
  ({ config, message, prevType, type, ...props }) => {
    const avatar = message.avatar ? (
      <Avatar size='xxs' src={message.avatar} />
    ) : (
      <Avatar size='xxs' content={message.from[0]} />
    )
    const handleReplyClick = () => {
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: {
          action: MessagingActions.REPLY_MESSAGE,
          data: message
        }
      })
    }

    const [hovered, sethovered] = useState(false)
    const sideActions = (
      <SideActionsWrapper>
        <AvatarWrapper>{avatar}</AvatarWrapper>
        {config.hasReply && (
          <IconWrapper onClick={handleReplyClick} title='reply'>
            <ReplyIcon />
          </IconWrapper>
        )}
        {config.hasForward && (
          <IconWrapper title='share'>
            <ShareIcon />
          </IconWrapper>
        )}
      </SideActionsWrapper>
    )
    const hasText = () => {
      let plainText = ''
      if (message.content.blocks) {
        plainText = message.content.blocks
          .map(block => (!block.text.trim() && '\n') || block.text)
          .join('\n')
      } else {
        plainText = message.content
      }
      if (plainText.length > 1) {
        return true
      }
      return false
    }
    const handleMouseOver = () => {
      config.hasMenu && sethovered(true)
    }
    const handleMouseLeave = () => {
      config.hasMenu && sethovered(false)
    }
    return (
      <RowWrapper
        hasTimeHeader={message.headerTime}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {message.headerTime && (
          <TimeHeader>
            <span>{message.headerTime}</span>
          </TimeHeader>
        )}
        {type === 'in' && sideActions}
        <MessageBase
          hovered={hovered}
          prevType={prevType}
          hasText={hasText()}
          hasMenu={config.hasMenu}
          {...message}
          {...props}
        />
        {type === 'out' && sideActions}
      </RowWrapper>
    )
  },
  () => true
)
const TimeHeader = styled.p`
  position: absolute;
  margin-top: -0.1rem;
  text-align: center;
  width: 100%;
  background: ${({ theme: { MESSAGING } }) => MESSAGING.dateDividerColour || '#0000'};
  height: 1px;
  span {
    background: ${({ theme: { MESSAGING } }) => MESSAGING.containerBackground};
    padding: 0.25rem 0.5rem;
    position: relative;
    top: -0.75rem;
    font-size: 0.75rem;
    border: 1px solid;
    border-radius: 100px;
  }
`
const IconWrapper = styled.div`
  cursor: pointer;
  padding: 0.25rem 0;
  text-align: center;
  width: 100%;
  path {
    fill: ${({ theme: { MESSAGING } }) => MESSAGING.forwardAndReplyIconsColour};
  }
`

const SideActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const RowWrapper = styled.div`
  display: flex;
  position: relative;
  ${({ hasTimeHeader }) =>
    hasTimeHeader &&
    css`
      margin-top: 1rem;
    `}
`
const AvatarWrapper = styled.div`
  margin: 0 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  div {
    background: ${({ theme: { MESSAGING } }) => MESSAGING.avatarBackground};
  }
`
Message.propTypes = {
  message: object.isRequired,
  prevType: string.isRequired
}
