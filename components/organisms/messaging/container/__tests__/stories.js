/**
 * Messaging/MessageContainer
 */

// React
import { useState } from 'react'
import { MessagingCommunicationService, MessageNames } from 'components/services'

// UI
import { Button, filterByKey, filterByString, MessagingContainer } from 'components'

import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/container'
import { mentions } from '../__mocks__/mentions'

export default {
  args: {
    audienceItems: [],
    className: '',
    maxLength: 320,
    messages: messages,
    onFilter: () => {},
    onSearch: () => {},
    onSubmit: () => {},
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

export const main = args => {
  const [messaging, setMessaging] = useState(messages)

  const handleFilter = type => {
    if (type !== 'all') {
      const msgs = JSON.parse(window.localStorage.getItem('messaging')) || messages
      const filter = filterByKey(msgs, 'icon', type)
      setMessaging(filter)
    } else {
      setMessaging(messages)
    }
  }

  const handleSearch = query => {
    if (query) {
      const search = filterByString(messaging, 'content', query)
      setMessaging(search)
    } else {
      setMessaging(messages)
    }
  }

  const defaultProps = {
    audienceItems: [
      { name: 'All', id: 'all' },
      { name: 'Internal', id: 'internal' },
      { name: 'Customer Only', id: 'customer' },
      { name: 'Supplier Only', id: 'supplier' },
      { name: 'Customer & Supplier', id: 'customer-supplier' }
    ],
    mentions,
    messages: messaging,
    onSearch: handleSearch,
    onFilter: handleFilter,
    ...args
  }
  const mimicRecieve = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.NEW_MESSAGES,
      payload: [messaging[Math.floor(Math.random() * 3)]]
    })
  }

  const onHashtagClick = e => {
    console.log(e)
  }
  const onMentionClick = e => {
    console.log(e)
  }
  const onSubmit = message => {
    console.log(message)
    const msg = {
      // attachments can be an array of files or array of type {src:string}
      attachments: message.attachments || [],

      content: message.message,
      createdAt: 'YYYY-MM-DD HH:mm',
      from: 'me',
      icon: 'comment',
      id: 'unique id recieved from server',
      issueId: 1,
      pictureId: null,
      statusText: 'status from server',
      time: 'ddd D MMM YYYY HH:mm',
      to: 'all',
      type: 'out'
    }
    // mimic the server delay and response(response is msg which should be passed to service as [msg])
    setTimeout(() => {
      MessagingCommunicationService.send({
        name: MessageNames.Messaging.NEW_MESSAGES,
        payload: [msg]
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
      />
      <Button onClick={mimicRecieve}>mimic message recieve</Button>
    </>
  )
}
