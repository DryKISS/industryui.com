/**
 * Simple Time
 */

// React
import { bool, number, oneOfType, string } from 'prop-types'

import { useTimer } from '../../../'

export const SimpleTime = props => {
  const {
    time: { seconds, minutes, hours, days }
  } = useTimer(props)

  return `${days}:${hours}:${minutes}:${seconds}`
}

SimpleTime.propTypes = {
  autoStart: bool,
  startTime: oneOfType([number, string]),
  endTime: oneOfType([number, string])
}
