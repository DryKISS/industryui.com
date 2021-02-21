/**
 * Get Acronym
 */
export const getAcronym = (string) => {
  const matches = string.match(/\b(\w)/g)
  return matches.join('')
}
