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
      payload: [
        {
          content:
            'Hiya we are expecting a PPM scheduled maintenance check on our LED lightbulbs throughout the third floor of XYZ Company offices today. Would appreciate a timely response on this so we can sort out security.',
          from: 'Mike <mike@xyz.com>',
          icon: 'email',
          more: false,
          pictureId: null,
          reply: 'Re: 5397 — PPM',
          statusText: 'delivered',
          time: 'Mon 4 Nov 2019 11:59',
          to: 'internal',
          type: 'in'
        }
      ]
    })
  }

  const onHashtagClick = e => {
    console.log(e)
  }
  const onMentionClick = e => {
    console.log(e)
  }

  return (
    <>
      <MessagingContainer
        {...defaultProps}
        onHashtagClick={onHashtagClick}
        onMentionClick={onMentionClick}
      />
      <Button onClick={mimicRecieve}>mimic message recieve</Button>
    </>
  )
}
