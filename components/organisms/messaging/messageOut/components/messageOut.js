/**
 * Message Out
 */

// React
import { object, string } from 'prop-types'

// UI
import { Column, Row } from 'components'
import { Message } from '../../'

export const MessageOut = ({ message, prevType }) => {
  return (
    <Row>
      <Column sm={1}>&nbsp;</Column>
      <Message prevType={prevType} {...message} />
    </Row>
  )
}

MessageOut.propTypes = {
  message: object.isRequired,
  prevType: string.isRequired
}
