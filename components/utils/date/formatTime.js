/**
 * Format date
 */

const formatTime = (date) => {
  const d = new Date(date)
  let hour = '' + d.getHours()
  let minute = '' + d.getMinutes()

  if (hour.length < 2) {
    hour = '0' + hour
  }

  if (minute.length < 2) {
    minute = '0' + minute
  }

  return `${hour}:${minute}`
}

export default formatTime
