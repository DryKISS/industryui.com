/**
 * Components - Molecules - Charts - Schedule - Helper - Generate Filter Date
 */

// React
import { string } from 'prop-types'

// Date FNS
import {
  endOfYear,
  endOfWeek,
  endOfMonth,
  endOfDay,
  startOfMonth,
  startOfWeek,
  startOfDay,
  startOfYear
} from 'date-fns'

const generateFilterDate = (status, date) => {
  switch (status) {
    case 'month':
      return {
        startDate: startOfMonth(new Date(date)).toISOString(),
        endDate: endOfMonth(new Date(date)).toISOString()
      }
    case 'week':
      return {
        startDate: startOfWeek(new Date(date)).toISOString(),
        endDate: endOfWeek(new Date(date)).toISOString()
      }
    case 'day':
      return {
        startDate: startOfDay(new Date(date)).toISOString(),
        endDate: endOfDay(new Date(date)).toISOString()
      }
    // since we get year as default, no need to have year switch
    default:
      return {
        startDate: startOfYear(new Date(date)).toISOString(),
        endDate: endOfYear(new Date(date)).toISOString()
      }
  }
}

generateFilterDate.propTypes = {
  status: string.isRequired,
  date: string.isRequired
}

generateFilterDate.defaultProps = {
  status: 'year',
  date: new Date().toISOString()
}

export default generateFilterDate
