/**
 * Format date
 *
 * Formats a firebase saved timestamp to a locale string
 *
 * @todo Rename this to Firebase data
 */
export const formatDate = (date) => {
  return new Date(date.seconds * 1000).toLocaleDateString()
}

export const formatIntDate = (date) => {

  if (date instanceof Date === false) {
    return date
  }

  const newDate = new Intl.DateTimeFormat(
    'en-GB',
    {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }
  ).format(date)

  return newDate
}

// {/* {date instanceof Date && !isNaN(date.valueOf()) &&

