/**
 * Components - Utils - Date - toUTC
 */

// Date-FNS
import { addMinutes, subMinutes } from 'date-fns'

const toUTC = (date) => {
  const offset = date.getTimezoneOffset()

  return Math.sign(offset) !== -1 ? addMinutes(date, offset) : subMinutes(date, Math.abs(offset))
}

export default toUTC
