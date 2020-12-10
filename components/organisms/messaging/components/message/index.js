/**
 * Messaging/Message
 */

// React
import { memo } from 'react'
import styled from 'styled-components'
import { object, string } from 'prop-types'
import { ReplyIcon } from './replyIcon'
import { ShareIcon } from './shareIcon'
// UI
import { Avatar, MessageBase } from 'components'

export const Message = memo(
  ({ message, prevType, type, ...props }) => {
    const avatar = message.avatar ? (
      <Avatar size='xxs' src={message.avatar} />
    ) : (
      <Avatar size='xxs' content={message.from[0]} />
    )

    const sideActions = (
      <SideActionsWrapper>
        <AvatarWrapper>{avatar}</AvatarWrapper>
        <IconWrapper title='reply'>
          <ReplyIcon />
        </IconWrapper>
        <IconWrapper title='share'>
          <ShareIcon />
        </IconWrapper>
      </SideActionsWrapper>
    )

    return (
      <RowWrapper>
        {type === 'in' && sideActions}
        <MessageBase prevType={prevType} {...message} {...props} />
        {type === 'out' && sideActions}
      </RowWrapper>
    )
  },
  () => true
)

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
`
const AvatarWrapper = styled.div`
  margin: 0 0.5rem;
  margin-bottom: 0.5rem;
  div {
    background: ${({ theme: { MESSAGING } }) => MESSAGING.avatarBackground};
  }
`
Message.propTypes = {
  message: object.isRequired,
  prevType: string.isRequired
}
