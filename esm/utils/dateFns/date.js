/**
 * Format date
 */
// Date FNS
import { format } from 'date-fns';
export var dateFns = function dateFns(string) {
  return format(new Date(string), 'LLL d, H:mm');
};
export var shortDate = function shortDate(string) {
  var date = Date.parse(string);
  return !isNaN(date) ? format(date, 'MMM d') : string;
};
//# sourceMappingURL=date.js.map