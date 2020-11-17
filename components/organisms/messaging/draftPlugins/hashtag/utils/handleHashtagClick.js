import { MessageNames, MessagingCommunicationService } from 'components'

export const handleHashtagClick = hashtag => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.HASHTAG_CLICKED,
    payload: hashtag
  })
}
