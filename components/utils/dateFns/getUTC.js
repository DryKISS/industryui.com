/**
 * date timezone
 */

// Date FNS

import { zonedTimeToUtc } from 'date-fns'

export const getUTC = (date, timezone = 'Europe/London') => {
  return zonedTimeToUtc(date, timezone)
}
