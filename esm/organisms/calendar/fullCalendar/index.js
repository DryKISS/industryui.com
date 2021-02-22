import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject;

/**
 * Components - Organisms - Calendar - Full Calendar
 *
 * @see https://fullcalendar.io/docs
 * @see https://fullcalendar.io/docs/react
 */
// React
import React, { forwardRef, useState } from 'react'; // UI

import { LdsSpinner, PageLoading, Theme } from '../../../';
import { CalendarWrapper } from './calendarWrapper'; // Styled Components

import styled from 'styled-components';
export var Calendar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var props = _extends({}, _ref);

  var CALENDAR = Theme.CALENDAR,
      COLOUR = Theme.COLOUR;

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
    eventColor: props.defaultEventColor || COLOUR.primary,
    header: props.header || CALENDAR.header,
    events: props.events,
    forwardedRef: ref,
    loading: setLoading
  })));
});
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  @media (max-width: 700px) {\n    .fc-header-toolbar {\n      flex-direction: column;\n    }\n  }\n"])));
//# sourceMappingURL=index.js.map