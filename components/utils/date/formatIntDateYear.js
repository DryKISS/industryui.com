/**
 * Format date
 */
const formatIntDateYear = (date, code = 'en-GB') => {
  if (date instanceof Date === false) {
    return date
  }

  const newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric'
  }).format(date)

  return newDate
}

export default formatIntDateYear
