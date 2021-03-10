/**
 * Simple Time
 */

// React
import { bool, number, oneOfType, string } from 'prop-types'

// UI
import { useTimer } from '../../'

export const SimpleTime = ({ autoStart, endTime, startTime }) => {
  const {
    time: { seconds, minutes, hours, days },
  } = useTimer({ autoStart, endTime, startTime })

  return `${days}:${hours}:${minutes}:${seconds}`
}

SimpleTime.propTypes = {
  autoStart: bool,
  startTime: oneOfType([number, string]),
  endTime: oneOfType([number, string]),
}
