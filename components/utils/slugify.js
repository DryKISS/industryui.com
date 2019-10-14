/**
 * Slugify a string
 */
export const slugify = (string) => {
  const slug = string
    .toLowerCase()
    .replace(/['&]/g, '')
    .replace(/ +/g, ' ')
    .replace(/ /g, '-')

  return slug
}
