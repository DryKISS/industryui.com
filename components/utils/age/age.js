/**
 * Age calculation from dateTime
 * birthDate: Instance of Date
 */
import { differenceInYears, isValid } from 'date-fns'

export const age = (birthDate) => {
  if (!birthDate || !isValid(birthDate)) {
    return 0
  }

  return differenceInYears(new Date(), birthDate)
}
export default age
