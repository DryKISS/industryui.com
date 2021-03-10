/**
 * Service - Component Communication Service
 */

// RXJS
import { Subject } from 'rxjs'

export const Subscriber = new Subject()
export const CommunicationService = {
  send: (msg) => {
    Subscriber.next(msg)
  },
}

export const LiveChartSubscriber = new Subject()
export const LiveChartMessageService = {
  send: (msg) => {
    LiveChartSubscriber.next(msg)
  },
}

export const MessagingSubscriber = new Subject()
export const MessagingCommunicationService = {
  send: (msg) => {
    MessagingSubscriber.next(msg)
  },
}

export const DetailsSubscriber = new Subject()
export const DetailsCommunicationService = {
  send: (msg) => {
    DetailsSubscriber.next(msg)
  },
}
