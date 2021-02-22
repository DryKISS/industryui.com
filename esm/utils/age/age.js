/**
 * Age calculation from dateTime
 * birthDate: Instance of Date
 */
import { differenceInYears, isValid } from 'date-fns';
export var age = function age(birthDate) {
  if (!birthDate || !isValid(birthDate)) {
    return 0;
  }

  return differenceInYears(new Date(), birthDate);
};
//# sourceMappingURL=age.js.map