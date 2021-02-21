import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Components - Organisms - Calendar - Full Calendar
 */
// React
import React, { forwardRef, useState } from 'react';
import { bool, string } from 'prop-types'; // Next

import dynamic from 'next/dynamic'; // UI

import { LdsSpinner, PageLoading, Theme } from '../../../'; // Styled Components

import styled from 'styled-components';
var CalendarWrapper = dynamic(function () {
  return import('./calendarWrapper');
}, {
  ssr: false
});
export var Calendar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var defaultEventColor = _ref.defaultEventColor,
      showTooltip = _ref.showTooltip,
      props = _objectWithoutProperties(_ref, ["defaultEventColor", "showTooltip"]);

  var CALENDAR = Theme.CALENDAR;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  return /*#__PURE__*/React.createElement(Wrapper, null, props.hasLoading && loading && /*#__PURE__*/React.createElement(PageLoading, {
    indicator: /*#__PURE__*/React.createElement(LdsSpinner, {
      color: "#000",
      size: 50
    }),
    opacity: 0.7,
    position: "absolute"
  }), /*#__PURE__*/React.createElement(CalendarWrapper, _extends({}, props, {
    header: props.header || CALENDAR.header,
    events: props.events,
    forwardedRef: ref,
    loading: setLoading
  })));
});
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  @media (max-width: 700px) {\n    .fc-header-toolbar {\n      flex-direction: column;\n    }\n  }\n\n  .fc-event {\n    border: none;\n  }\n\n  .fc-day-grid-event {\n    padding: 0;\n  }\n"])));
Calendar.propTypes = {
  defaultEventColor: string,
  showTooltip: bool
};
Calendar.defaultProps = {
  defaultEventColor: 'primary',
  showTooltip: false
};
//# sourceMappingURL=fullCalendar.js.map