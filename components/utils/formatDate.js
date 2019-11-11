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

export const formatDateStandard = date => {
  var d = new Date(date)
  var month = '' + (d.getMonth() + 1)
  var day = '' + d.getDate()
  var year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

export const formatRelativeTime = date => {
  return moment(date).fromNow()
}
