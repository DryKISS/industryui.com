/**
 * Components - Messaging
 */

// UI

import {
  MessageNames,
  MessagingActions
} from '../../../../../services/componentCommunication/messageNames'
import { MessagingCommunicationService } from '../../../../../services/componentCommunication/componentCommunication'

const handleHashtagClick = (hashtag) => {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: { action: MessagingActions.HASHTAG_CLICKED, data: hashtag }
  })
}
export default handleHashtagClick
