/**
 * Format date
 */

// Moment
import moment from 'moment'

const formatRelativeTime = (date) => {
  return moment(date).fromNow()
}

export default formatRelativeTime
