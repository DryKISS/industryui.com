import _extends from "@babel/runtime/helpers/esm/extends";

/**
 * Components - Organisms - Calendar - Full Calendar - Wrapper
 */
// React
import React from 'react'; // UI

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'; // This is to show how to import it but its not working for us
// import bootstrapPlugin from '@fullcalendar/bootstrap'
// import '@fullcalendar/bootstrap/main.css'

export var CalendarWrapper = function CalendarWrapper(props) {
  return /*#__PURE__*/React.createElement(FullCalendar, _extends({
    defaultView: props.defaultView,
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    ref: props.forwardedRef
  }, props));
};
CalendarWrapper.displayName = "CalendarWrapper";
//# sourceMappingURL=calendarWrapper.js.map