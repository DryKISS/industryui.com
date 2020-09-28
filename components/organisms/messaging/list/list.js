/**
 * Messaging/List
 */

import { array } from 'prop-types'

// UI
import { Message } from '../../../'

export const MessageList = ({ messages }) => {
  return messages.map((message, index) => (
    <Message
      message={message}
      key={index}
      prevType={message.type}
      scrollToMessage={index + 1 === messages.length}
      type={message.type}
    />
  ))
}

MessageList.propTypes = {
  messages: array.isRequired
}
