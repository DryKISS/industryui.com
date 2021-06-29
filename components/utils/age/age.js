/**
 * Age calculation from dateTime
 * birthDate: Instance of Date
 */

// Date FNS
import { differenceInYears, isValid } from 'date-fns'

const age = (birthDate) => {
  if (!birthDate || !isValid(birthDate)) {
    return 0
  }

  return differenceInYears(new Date(), birthDate)
}

export default age
