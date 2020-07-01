/**
 * Format date
 */
import moment from 'moment'

export const formatDate = date => {
  return new Date(date.seconds * 1000).toLocaleDateString()
}

export const formatIntDate = (date, code = 'en-GB') => {
  if (date instanceof Date === false) {
    return date
  }

  const newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)

  return newDate
}

export const formatIntDateShort = (date, code = 'en-GB') => {
  if (date instanceof Date === false) {
    return date
  }

  const newDate = new Intl.DateTimeFormat(code, {
    month: 'long',
    day: '2-digit'
  }).format(date)

  return newDate
}

export const formatIntDateYear = (date, code = 'en-GB') => {
  if (date instanceof Date === false) {
    return date
  }

  const newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric'
  }).format(date)

  return newDate
}

export const formatTime = date => {
  const d = new Date(date)
  let hour = '' + d.getHours()
  let minute = '' + d.getMinutes()

  if (hour.length < 2) hour = '0' + hour
  if (minute.length < 2) minute = '0' + minute

  return `${hour}:${minute}`
}

export const formatDateStandard = (date, showTime = false) => {
  const d = new Date(date)
  const year = d.getFullYear()
  let month = '' + (d.getMonth() + 1)
  let day = '' + d.getDate()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  const formattedDate = [year, month, day].join('-')

  if (showTime) {
    return formattedDate + ' ' + formatTime(date)
  } else {
    return formattedDate
  }
}

export const formatRelativeTime = date => {
  return moment(date).fromNow()
}
