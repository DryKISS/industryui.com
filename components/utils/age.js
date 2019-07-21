/**
 * Age calculation from firbase dateTime
 */
import moment from 'moment'

export const age = (birthDate) => {
  const years = moment().diff(birthDate.seconds * 1000, 'years')
  return years
}
