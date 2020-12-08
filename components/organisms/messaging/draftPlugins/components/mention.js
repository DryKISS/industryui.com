import styled from 'styled-components'
import { MessagingActions, MessagingCommunicationService, MessageNames } from 'components'

const handleMentionClick = mentionProps => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: { action: MessagingActions.MENTION_CLICKED, data: mentionProps.mention }
  })
}

export const MentionComponent = ({ mentionProps }) => {
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
  color: ${({ theme: { MESSAGING } }) => MESSAGING.MENTION_COLOUR};
`
