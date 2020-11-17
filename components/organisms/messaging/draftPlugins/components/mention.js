import styled from 'styled-components'
import { MessagingCommunicationService, MessageNames } from 'components'

const handleMentionClick = mentionProps => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MENTION_CLICKED,
    payload: mentionProps.mention
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
