/**
 * Messaging/Message
 */

// React
import { memo } from 'react'

import { object, string } from 'prop-types'

// UI
import { Column, MessageBase, Row, Tail } from '../../../'

export const Message = memo(({ message, prevType, type, ...props }) => {
  return (
    <Row style={{ position: 'relative' }}>
      {type === 'out' && <Column sm={1}>&nbsp;</Column>}
      <Tail type={type} />
      <MessageBase prevType={prevType} {...message} {...props} />
    </Row>
  )
})

Message.propTypes = {
  message: object.isRequired,
  prevType: string.isRequired
}
