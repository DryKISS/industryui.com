/**
 * Age calculation from firbase dateTime
 */
import moment from 'moment'

export const age = birthDate => {
  if (!birthDate || !(birthDate instanceof Date)) return 0
  const years = moment().diff(birthDate, 'years')
  return years
}
