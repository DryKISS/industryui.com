/**
 * Format date
 */
const formatIntDateShort = (date, code = 'en-GB') => {
  if (date instanceof Date === false) {
    return date
  }

  const newDate = new Intl.DateTimeFormat(code, {
    month: 'long',
    day: '2-digit'
  }).format(date)

  return newDate
}

export default formatIntDateShort
