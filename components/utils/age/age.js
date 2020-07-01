/**
 * Age calculation from dateTime
 */
import moment from 'moment'

export const age = birthDate => {
  if (!birthDate || !moment(birthDate).isValid()) {
    return 0
  }

  return moment().diff(birthDate, 'years')
}
