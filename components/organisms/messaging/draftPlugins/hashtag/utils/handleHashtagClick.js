/**
 * Components - Messaging
 */

// UI
import MessageNames from '../../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../../services/componentCommunication/messagingActions'
import MessagingCommunicationService from '../../../../../services/componentCommunication/messaging/service'

const handleHashtagClick = (hashtag) => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: { action: MessagingActions.HASHTAG_CLICKED, data: hashtag }
  })
}
export default handleHashtagClick
