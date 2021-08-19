/**
 * Format date
 */

// Date FNS
import { format } from 'date-fns'

const shortDate = (string) => {
  const date = Date.parse(string)
  return !isNaN(date) ? format(date, 'MMM d') : string
}

export default shortDate
