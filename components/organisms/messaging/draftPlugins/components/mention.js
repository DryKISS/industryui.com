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
      // eslint-disable-next-line no-alert
      onClick={() => handleMentionClick(mentionProps)}
    >
      {mentionProps.children}
    </StyledMention>
  )
}
const StyledMention = styled.span``
