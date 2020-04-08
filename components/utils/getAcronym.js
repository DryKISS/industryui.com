/**
 * Get Acronym of a string - Example: "Java Script Object Notation" -> "JSON"
 */
export const getAcronym = string => {
  const matches = string.match(/\b(\w)/g)
  return matches.join('')
}
