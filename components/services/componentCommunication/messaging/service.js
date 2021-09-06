/**
 * Components - Services - Component Communication - Messaging - Service
 */

// UI
import MessagingSubscriber from './subscriber'

const MessagingCommunicationService = {
  send: (msg) => {
    MessagingSubscriber.next(msg)
  }
}

export default MessagingCommunicationService
