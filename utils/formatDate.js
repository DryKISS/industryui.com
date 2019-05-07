/**
 * Format data
 *
 * Formats a firebase saved timestamp to a locale string
 */
export const formatDate = (date) => {
  return new Date(date.seconds * 1000).toLocaleDateString()
}
