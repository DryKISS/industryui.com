/**
 * Format date
 */

// UI
import formatTime from './formatTime'

const formatDateStandard = (date, showTime = false) => {
  const d = new Date(date)
  const year = d.getFullYear()
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()

  if (month.length < 2) {
    month = '0' + month
  }

  if (day.length < 2) {
    day = '0' + day
  }

  const formattedDate = [year, month, day].join('-')

  if (showTime) {
    return formattedDate + ' ' + formatTime(date)
  } else {
    return formattedDate
  }
}

export default formatDateStandard
