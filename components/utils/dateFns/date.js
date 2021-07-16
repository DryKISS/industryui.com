/**
 * Format date
 */

// Date FNS
import { format } from 'date-fns'

export const dateFns = (string) => {
  return format(new Date(string), 'LLL d, H:mm')
}

export const shortDate = (string) => {
  const date = Date.parse(string)
  return !isNaN(date) ? format(date, 'MMM d') : string
}
