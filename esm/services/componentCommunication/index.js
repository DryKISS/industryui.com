/**
 * Service - Component Communication Service
 */
// RXJS
import { Subject } from 'rxjs';
export var Subscriber = new Subject();
export var CommunicationService = {
  send: function send(msg) {
    Subscriber.next(msg);
  }
};
export var LiveChartSubscriber = new Subject();
export var LiveChartMessageService = {
  send: function send(msg) {
    LiveChartSubscriber.next(msg);
  }
};
export var MessagingSubscriber = new Subject();
export var MessagingCommunicationService = {
  send: function send(msg) {
    MessagingSubscriber.next(msg);
  }
};
export var DetailsSubscriber = new Subject();
export var DetailsCommunicationService = {
  send: function send(msg) {
    DetailsSubscriber.next(msg);
  }
};
//# sourceMappingURL=index.js.map