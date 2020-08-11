/**
 * Messaging/MessageContainer
 */

// React
import React, { useEffect, useState } from 'react'

// Moment
import moment from 'moment'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { filterByKey, filterByString, MessagingContainer, useForm } from 'components'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/messages'

export default {
  title: 'Organisms/Messaging/Container',
  component: MessagingContainer,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const initialState = {
    messagingFilter: 'all'
  }

  const [messaging, setMessaging] = useState(null)
  const { change, form } = useForm(initialState)

  useEffect(() => {
    setMessaging(messages)

    if (form.messagingFilter !== 'all') {
      const msgs = JSON.parse(window.localStorage.getItem('messaging')) || messages
      const filter = filterByKey(msgs, 'icon', form.messagingFilter)
      setMessaging(filter)
    }
  }, [form])

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
    onFilter: change,
    onSearch: handleSearch,
    onSubmit: handleSubmit,
    ...props
  }

  return messaging && <MessagingContainer {...defaultProps} />
}

export const main = () => <BaseComponent />
