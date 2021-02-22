/**
 * Hooks - Use Component Communication - Service
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
//# sourceMappingURL=service.js.map