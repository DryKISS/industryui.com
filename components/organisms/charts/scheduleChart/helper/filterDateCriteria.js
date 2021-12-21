/**
 * Components - Molecules - Charts - Schedule - Helper - Filter Date Criteria
 */

// React
import { string } from 'prop-types'

// Date FNS
import { getWeek, getDate } from 'date-fns'

const filterDateCriteria = (type, timingStart) => {
  switch (type) {
    case 'day':
      return getDate(new Date(timingStart)) === getDate(new Date())
    case 'week':
      return getWeek(new Date(timingStart)) === getWeek(new Date())
    case 'month':
      return new Date(timingStart).getMonth() === new Date().getMonth()
    // since we get year as default, no need to have year switch
    default:
      return new Date(timingStart).getFullYear() === new Date().getFullYear()
  }
}

filterDateCriteria.propTypes = {
  type: string.isRequired,
  timingStart: string.isRequired
}

filterDateCriteria.defaultProps = {
  type: 'year',
  timingStart: new Date().toISOString()
}

export default filterDateCriteria
