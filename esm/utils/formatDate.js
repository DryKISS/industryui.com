/**
 * Format date
 */
import moment from 'moment';
export var formatDate = function formatDate(date) {
  return new Date(date.seconds * 1000).toLocaleDateString();
};
export var formatIntDate = function formatIntDate(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
  return newDate;
};
export var formatIntDateShort = function formatIntDateShort(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    month: 'long',
    day: '2-digit'
  }).format(date);
  return newDate;
};
export var formatIntDateYear = function formatIntDateYear(date) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-GB';

  if (date instanceof Date === false) {
    return date;
  }

  var newDate = new Intl.DateTimeFormat(code, {
    year: 'numeric'
  }).format(date);
  return newDate;
};
export var formatTime = function formatTime(date) {
  var d = new Date(date);
  var hour = '' + d.getHours();
  var minute = '' + d.getMinutes();
  if (hour.length < 2) hour = '0' + hour;
  if (minute.length < 2) minute = '0' + minute;
  return "".concat(hour, ":").concat(minute);
};
export var formatDateStandard = function formatDateStandard(date) {
  var showTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var d = new Date(date);
  var year = d.getFullYear();
  var month = '' + (d.getMonth() + 1);
  var day = '' + d.getDate();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  var formattedDate = [year, month, day].join('-');

  if (showTime) {
    return formattedDate + ' ' + formatTime(date);
  } else {
    return formattedDate;
  }
};
export var formatRelativeTime = function formatRelativeTime(date) {
  return moment(date).fromNow();
};
//# sourceMappingURL=formatDate.js.map