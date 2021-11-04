/**
 * Format date
 */

import { formatDistanceToNow } from 'date-fns'

const formatRelativeTime = (date) => {
  return formatDistanceToNow(new Date(date))
}

export default formatRelativeTime
