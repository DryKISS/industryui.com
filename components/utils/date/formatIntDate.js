/**
 * Format date
 */
const formatIntDate = (date, code = 'en-GB') => {
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

export default formatIntDate
