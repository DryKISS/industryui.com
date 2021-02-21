/**
 * Big Calendar
 */
// React
import React from 'react'; // Moment

import moment from 'moment'; // Big Calendar

import { Calendar, momentLocalizer } from 'react-big-calendar';
var events = [{
  start: moment(),
  end: moment().add(1, 'days').toDate(),
  title: 'Sprint planning'
}];
export var BigCalendar = function BigCalendar() {
  var localizer = momentLocalizer(moment);
  return /*#__PURE__*/React.createElement(Calendar, {
    localizer: localizer,
    defaultDate: new Date(),
    events: events,
    startAccessor: "start",
    endAccessor: "end",
    style: {
      height: 500
    }
  });
};
BigCalendar.displayName = "BigCalendar";
//# sourceMappingURL=bigCalendar.js.map