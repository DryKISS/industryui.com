/**
 * Messaging/MessageContainer
 */

// React
import { useState } from 'react'

// Moment
import moment from 'moment'

// UI
import { filterByKey, filterByString, MessagingContainer } from 'components'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/container'

export default {
  title: 'Organisms/Messaging/Container',
  component: MessagingContainer,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
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

  const handleSubmit = form => {
    const { audience, from, icon, message, type } = form

    const msg = {
      content: message,
      from: from || null,
      icon: icon || 'comment',
      pictureId: null,
      statusText: 'delivered',
      to: audience,
      type: type || 'out',
      issueId: 1
    }

    msg.id = messaging[messaging.length - 1].id + 1

    msg.createdAt = moment().format('YYYY-MM-DD HH:mm')
    msg.time = moment().format('ddd D MMM YYYY HH:mm')

    msg.issueId = parseInt(msg.issueId)
    msg.from = 'test'

    messaging.push(msg)
    window.localStorage.setItem('messaging', JSON.stringify(messaging))

    setMessaging([...messaging])
  }

  const defaultProps = {
    audienceItems: [
      { name: 'All', id: 'all' },
      { name: 'Internal', id: 'internal' },
      { name: 'Customer Only', id: 'customer' },
      { name: 'Supplier Only', id: 'supplier' },
      { name: 'Customer & Supplier', id: 'customer-supplier' }
    ],
    messages: messaging,
    onSearch: handleSearch,
    onFilter: handleFilter,
    onSubmit: handleSubmit,
    ...props
  }

  return messaging && <MessagingContainer {...defaultProps} />
}

export const main = () => <BaseComponent />
