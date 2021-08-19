/**
 * Format date
 */
const formatDate = (date) => {
  return new Date(date.seconds * 1000).toLocaleDateString()
}

export default formatDate
