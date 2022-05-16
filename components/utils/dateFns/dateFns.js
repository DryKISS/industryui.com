/**
 * Format date
 */

// Date FNS
import { format } from 'date-fns'

const dateFns = (string, { strFormat = 'LLL d, H:mm' }) => {
  return !isNaN(Date.parse(string)) ? format(new Date(string), strFormat) : string
}

export default dateFns
