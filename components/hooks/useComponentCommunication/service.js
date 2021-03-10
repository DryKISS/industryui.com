/**
 * Hooks - Use Component Communication - Service
 */

// RXJS
import { Subject } from 'rxjs'

export const Subscriber = new Subject()

export const CommunicationService = {
  send: (msg) => {
    Subscriber.next(msg)
  }
}

export const LiveChartSubscriber = new Subject()

export const LiveChartMessageService = {
  send: (msg) => {
    LiveChartSubscriber.next(msg)
  }
}
