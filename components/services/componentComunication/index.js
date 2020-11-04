/**
 * Service - Component Communication Service
 */

// RXJS
import { Subject } from 'rxjs'

export const Subscriber = new Subject()
export const ComunicationService = {
  send: msg => {
    Subscriber.next(msg)
  }
}

export const LiveChartSubscriber = new Subject()
export const LiveChartMessageService = {
  send: msg => {
    LiveChartSubscriber.next(msg)
  }
}

export const MessagingSubscriber = new Subject()
export const MessagingComunicationService = {
  send: msg => {
    MessagingSubscriber.next(msg)
  }
}
