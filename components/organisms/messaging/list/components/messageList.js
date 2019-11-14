/**
 * Messages
 */

// React
import { array } from 'prop-types'

// UI
import { MessageIn, MessageOut } from '../../'

export const MessageList = ({ messages }) => {
  let prevType = ''

  return messages.map((message, index) => {
    const msg =
      message.type === 'in' ? (
        <MessageIn message={message} key={index} prevType={prevType} />
      ) : (
        <MessageOut message={message} key={index} prevType={prevType} />
      )

    prevType = message.type

    return msg
  })
}

MessageList.propTypes = {
  messages: array.isRequired
}
