/**
 * Messaging/List
 */

// React
import { useState } from 'react'

import { array } from 'prop-types'

// UI
import { Message, useComponentComunication } from 'components'
import { MessageNames, MessagingSubscriber } from 'components/services'

export const MessageList = ({ messages }) => {
  const [Messages, setMessages] = useState(messages)
  console.log(Messages)
  const onRecieve = payload => {
    setMessages(Messages)
    console.log(payload)
  }
  useComponentComunication({
    messageName: MessageNames.Messaging.NEW_MESSAGES,
    onRecieve,
    subscriber: MessagingSubscriber
  })

  return messages.map((message, index) => (
    <Message
      key={index}
      message={message}
      prevType={message.type}
      scrollToMessage={index + 1 === messages.length}
      type={message.type}
    />
  ))
}

MessageList.propTypes = {
  messages: array.isRequired
}
