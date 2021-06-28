/**
 * Get Acronym
 */
const getAcronym = (string) => {
  const matches = string.match(/\b(\w)/g)
  return matches.join('')
}

export default getAcronym
