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

export default (status, date) => {
  switch (status) {
    case 'year':
      return {
        startDate: startOfYear(new Date(date)).toISOString(),
        endDate: endOfYear(new Date(date)).toISOString()
      }
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
  }
}
