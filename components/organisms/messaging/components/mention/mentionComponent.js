/**
 * Components - Organisms - Messaging - Draft Plugins - Components - Mention
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../../services/componentCommunication/messaging/service'

const handleMentionClick = (mentionProps) => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: {
      action: MessagingActions.MENTION_CLICKED,
      data: mentionProps.mention
    }
  })
}

const MentionComponent = ({ mentionProps }) => {
  return (
    <StyledMention
      className={mentionProps.className}
      onClick={() => handleMentionClick(mentionProps)}
    >
      {mentionProps.children}
    </StyledMention>
  )
}

const StyledMention = styled.span`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.mentionColour};
`
export default MentionComponent
