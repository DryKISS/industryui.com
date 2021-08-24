/**
 * Messaging/MessageContainer
 */

// React
import React, { useState } from 'react'

// UI

import Button from '../../../../atoms/button/button/button'
import { filterByKey, filterByString } from '../../../../utils/mockHelpers/mockHelpers'
import MessagingContainer from '../../container/container'

import {
  MessageNames,
  MessagingActions
} from '../../../../services/componentCommunication/messageNames'
import { MessagingCommunicationService } from '../../../../services/componentCommunication/componentCommunication'

import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/container'
import { mentions } from '../__mocks__/mentions'

export default {
  args: {
    className: '',
    maxLength: 320,
    style: {}
  },
  component: MessagingContainer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/Container'
}

export const Main = (args) => {
  const [messaging] = useState(messages)

  const handleFilter = (type) => {
    if (type !== 'all') {
      const msgs = JSON.parse(window.localStorage.getItem('messaging')) || messages
      const filter = filterByKey(msgs, 'icon', type)

      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: { action: MessagingActions.RENEW_MESSAGES, data: filter }
      })
    } else {
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: { action: MessagingActions.RENEW_MESSAGES, data: messages }
      })
    }
  }

  const handleSearch = (query) => {
    if (query) {
      const search = filterByString(messaging, 'content', query)
      // setMessaging(search)
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: { action: MessagingActions.RENEW_MESSAGES, data: search }
      })
    } else {
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: { action: MessagingActions.RENEW_MESSAGES, data: messages }
      })
    }
  }

  const defaultProps = {
    ...args
  }
  const mimicRecieve = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.NEW_MESSAGES,
        data: [messaging[Math.floor(Math.random() * 3)]]
      }
    })
  }

  const onHashtagClick = (e) => {
    console.info(e)
  }
  const onMentionClick = (e) => {
    console.info(e)
  }

  const onSubmit = (message) => {
    const msg = {
      // attachments can be an array of files or array of type {src:string}
      attachments: message.attachments || [],
      content: message.message,
      createdAt: 'YYYY-MM-DD HH:mm',
      from: 'me',
      icon: 'comment',
      id: Math.floor(Math.random() * 1000),
      issueId: 1,
      pictureId: null,
      statusText: 'status from server',
      time: 'ddd D MMM YYYY HH:mm',
      to: 'all',
      type: 'out',
      ...(message.voice && { voice: URL.createObjectURL(message.voice) }),
      ...(message.replyTo && { replyTo: message.replyTo })
    }
    // mimic the server delay and response is msg which should be passed to service as [msg]
    setTimeout(() => {
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.MESSAGING_ACTION,
        payload: {
          action: MessagingActions.NEW_MESSAGES,
          data: [msg]
        }
      })
    }, 100)
  }
  return (
    <>
      <MessagingContainer
        {...defaultProps}
        onHashtagClick={onHashtagClick}
        onMentionClick={onMentionClick}
        onMessageSubmit={onSubmit}
        messages={messages}
        audienceItems={[
          { name: 'All', id: 'all' },
          { name: 'Internal', id: 'internal' },
          { name: 'Customer Only', id: 'customer' },
          { name: 'Supplier Only', id: 'supplier' },
          { name: 'Customer & Supplier', id: 'customer-supplier' }
        ]}
        mentions={mentions}
        onSearch={handleSearch}
        onFilter={handleFilter}
        messagesContainerHeight={550}
      />
      <Button onClick={mimicRecieve}>mimic message recieve</Button>
    </>
  )
}
