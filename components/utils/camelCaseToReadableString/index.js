/**
 * Utils - camelCaseToReadableString
 */

// Utils
import { capitalize } from '../capitalize'

export const camelCaseToReadableString = (str, capitalizeFirstLetter = true) => {
  const temp = str.split(/(?=[A-Z])/).join(' ')

  return capitalizeFirstLetter ? capitalize(temp) : temp
}
