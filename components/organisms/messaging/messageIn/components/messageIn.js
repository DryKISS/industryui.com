/**
 * Message In
 */

// React
import { object, string } from 'prop-types'

// UI
import { Row } from '../../../../'
import { Message } from '../../'

export const MessageIn = ({ message, prevType }) => {
  return (
    <Row>
      <Message prevType={prevType} {...message} />
    </Row>
  )
}

MessageIn.propTypes = {
  message: object.isRequired,
  prevType: string.isRequired
}
