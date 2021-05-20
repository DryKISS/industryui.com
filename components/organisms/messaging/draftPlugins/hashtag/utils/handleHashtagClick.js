/**
 * Components - Messaging
 */

// UI
import { MessageNames, MessagingActions, MessagingCommunicationService } from '../../../../../'

const handleHashtagClick = (hashtag) => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: { action: MessagingActions.HASHTAG_CLICKED, data: hashtag }
  })
}
export default handleHashtagClick
