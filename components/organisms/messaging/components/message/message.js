/**
 * Messaging/Message
 */

// React
import React, { memo, useState } from 'react'
import { object, string } from 'prop-types'
// Style
import styled, { css } from 'styled-components'

// UI
import Avatar from '../../../../atoms/avatar/avatar'
import MessageBase from '../../components/base/components/messageBase'
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../organisms/messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../../services/componentCommunication/messaging/service'
import ReplyIcon from './replyIcon'
import ShareIcon from './shareIcon'

const Message = memo(
  ({ config, message, prevType, type, isSending, ...props }) => {
    const avatar = message.avatar ? (
      <Avatar size="xxs" src={message.avatar} />
    ) : (
      <Avatar size="xxs" content={message.from[0]} />
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

        {config?.hasReply && (
          <IconWrapper onClick={handleReplyClick} title="reply">
            <ReplyIcon />
          </IconWrapper>
        )}

        {config?.hasForward && (
          <IconWrapper title="share">
            <ShareIcon />
          </IconWrapper>
        )}
      </SideActionsWrapper>
    )

    const hasText = () => {
      let plainText = ''
      if (message.content.blocks) {
        plainText = message.content.blocks
          .map((block) => (!block.text.trim() && '\n') || block.text)
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
      config?.hasMenu && sethovered(true)
    }

    const handleMouseLeave = () => {
      config?.hasMenu && sethovered(false)
    }

    return (
      <RowWrapper
        hasTimeHeader={message.headerTime}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {message.headerTime && (
          <TimeHeader>
            <div>
              <span>{message.headerTime}</span>
              <p />
            </div>
          </TimeHeader>
        )}
        {type === 'in' && sideActions}
        <MessageBase
          hovered={hovered}
          isSending={isSending}
          prevType={prevType}
          hasText={hasText()}
          hasMenu={config?.hasMenu}
          {...message}
          {...props}
        />
        {type === 'out' && sideActions}
      </RowWrapper>
    )
  },
  () => true
)

const TimeHeader = styled.div`
  position: absolute;
  margin-top: -0.1rem;
  text-align: center;
  width: 100%;
  background: ${({ theme: { MESSAGING } }) => MESSAGING.dateDividerColour || '#0000'};
  height: 1px;
  div {
    background: white;
    border: 1px solid;
    border-radius: 100px;
    display: flex;
    font-size: 0.75rem;
    height: 19px;
    left: calc(50% - 50px);
    padding: 0.1rem 0.5rem;
    place-content: center;
    position: relative;
    top: -0.7rem;
    width: 110px;
    span {
      line-height: 12px;
      padding-top: 1px;
      position: absolute;
      z-index: 1;
    }
    p {
      background: ${({ theme: { MESSAGING } }) =>
        MESSAGING.dateBadgeBackground || MESSAGING.containerBackground};
      border-radius: 15px;
      bottom: 0;
      left: 0;
      margin: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
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

export default Message
