/**
 * Components - Molecules - Charts - Schedule - Helper - Filter Date Criteria
 */

// Date FNS
import { getWeek, getDate } from 'date-fns'

export default (type, timingStart) => {
  switch (type) {
    case 'day':
      return getDate(new Date(timingStart)) === getDate(new Date())
    case 'week':
      return getWeek(new Date(timingStart)) === getWeek(new Date())
    case 'month':
      return new Date(timingStart).getMonth() === new Date().getMonth()
    case 'year':
      return new Date(timingStart).getFullYear() === new Date().getFullYear()
  }
}
