import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var _templateObject;

/**
 * Components - Organisms - Calendar - Full Calendar - Event
 */
// React
import React from 'react';
import ReactDOM from 'react-dom'; // Styled Components

import styled, { ThemeProvider } from 'styled-components'; // UI

import { BACKGROUND, Text, Theme, Tooltip } from '../../../';

var EventContent = function EventContent(_ref) {
  var defaultEventColor = _ref.defaultEventColor,
      _ref$event = _ref.event,
      _ref$event$extendedPr = _ref$event.extendedProps,
      context = _ref$event$extendedPr.context,
      description = _ref$event$extendedPr.description,
      tooltip = _ref$event$extendedPr.tooltip,
      title = _ref$event.title,
      showTooltip = _ref.showTooltip;
  var content = /*#__PURE__*/React.createElement(StyledEvent, {
    context: context || defaultEventColor
  }, /*#__PURE__*/React.createElement(Text, {
    content: title,
    context: "light"
  }));
  return showTooltip ? /*#__PURE__*/React.createElement(Tooltip, {
    content: tooltip || description
  }, content) : content;
};

export var renderEvent = function renderEvent(_ref2) {
  var _eventDiv$classList;

  var defaultEventColor = _ref2.defaultEventColor,
      event = _ref2.event,
      el = _ref2.el,
      showTooltip = _ref2.showTooltip,
      view = _ref2.view;
  var eventDiv = document.createElement('div');
  var classes = Array.from(el.classList);

  (_eventDiv$classList = eventDiv.classList).add.apply(_eventDiv$classList, _toConsumableArray(classes));

  ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: Theme
  }, /*#__PURE__*/React.createElement(EventContent, {
    defaultEventColor: defaultEventColor,
    event: event,
    showTooltip: showTooltip
  })), eventDiv);
  return eventDiv;
};
var StyledEvent = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  padding: 0 4px;\n  color: white;\n  border-radius: 4px;\n"])), function (props) {
  return BACKGROUND(props);
});
//# sourceMappingURL=event.js.map