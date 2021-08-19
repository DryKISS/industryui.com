/**
 * Format date
 */

// Date FNS
import { format } from 'date-fns'

const dateFns = (string) => {
  return format(new Date(string), 'LLL d, H:mm')
}

export default dateFns
