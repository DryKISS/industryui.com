import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Components - Organisms - Calendar - Full Calendar - Wrapper
 */
// React
import React, { useEffect, useState } from 'react'; // Next

import dynamic from 'next/dynamic';
var FullCalendar;
export var CalendarWrapper = function CalendarWrapper(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      calendarLoaded = _useState2[0],
      setCalendarLoaded = _useState2[1];

  useEffect(function () {
    FullCalendar = dynamic({
      modules: function modules() {
        return {
          calendar: import('@fullcalendar/react'),
          dayGridPlugin: import('@fullcalendar/daygrid'),
          timeGridPlugin: import('@fullcalendar/timegrid'),
          interactionPlugin: import('@fullcalendar/interaction'),
          listPlugin: import('@fullcalendar/list')
        };
      },
      render: function render(props, _ref) {
        var Calendar = _ref.calendar,
            plugins = _objectWithoutProperties(_ref, ["calendar"]);

        return /*#__PURE__*/React.createElement(Calendar, _extends({
          plugins: Object.values(plugins),
          ref: props.forwardedRef
        }, props));
      },
      ssr: false
    });
    setCalendarLoaded(true);
  }, []);

  var showCalendar = function showCalendar(props) {
    if (!calendarLoaded) return /*#__PURE__*/React.createElement("div", null, "Loading ...");
    return /*#__PURE__*/React.createElement(FullCalendar, props);
  };

  return /*#__PURE__*/React.createElement("div", null, showCalendar(props));
};
CalendarWrapper.displayName = "CalendarWrapper";
//# sourceMappingURL=calendarWrapper.js.map