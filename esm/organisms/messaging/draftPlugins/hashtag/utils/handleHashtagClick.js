/**
 * Components - Messaging
 */
// UI
import { MessageNames, MessagingActions, MessagingCommunicationService } from '../../../../../';
export var handleHashtagClick = function handleHashtagClick(hashtag) {
  MessagingCommunicationService.send({
    name: MessageNames.Messaging.MESSAGING_ACTION,
    payload: {
      action: MessagingActions.HASHTAG_CLICKED,
      data: hashtag
    }
  });
};
//# sourceMappingURL=handleHashtagClick.js.map