/**
 * Utils - Camel Case
 */

// Utils
import { capitalize } from 'components'

export const camelCase = string => {
  return capitalize(
    string.replace(/([A-Z])/g, match => {
      return ' ' + match
    })
  )
}
