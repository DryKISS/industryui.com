import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Components - Organisms - Bar - Components - Toggle
 */
// React
import React from 'react';
import { bool, func, string } from 'prop-types'; // UI

import { ChevronRightIcon } from '../../../';
import { BarConfig } from './config'; // Style

import styled, { css } from 'styled-components';
export var BarToggle = function BarToggle(_ref) {
  var barWidth = _ref.barWidth,
      onClick = _ref.onClick,
      open = _ref.open,
      placement = _ref.placement;
  return /*#__PURE__*/React.createElement(OpenButton, {
    onClick: onClick,
    open: open,
    placement: placement,
    place: barWidth
  }, /*#__PURE__*/React.createElement(ChevronRightIcon, null));
};
BarToggle.displayName = "BarToggle";
var OpenButton = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  display: flex;\n  position: fixed;\n  transition-duration: ", ";\n  transition-property: left, opacity, right, width, transition;\n  transition-timing-function: ", ";\n  z-index: 10;\n  svg {\n    right: 0.2rem;\n    position: absolute;\n    transition: transform ", " ease;\n  }\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.BAR.transitionDuration;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.BAR.transitionTiming;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.BAR.transitionDuration;
}, function (_ref5) {
  var open = _ref5.open;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      svg,\n      ._ {\n        transform: rotate(", "deg);\n      }\n    "])), open ? '180' : '0');
}, function (_ref6) {
  var placement = _ref6.placement,
      open = _ref6.open,
      place = _ref6.place;
  return (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background-color:", ";\n      border-top-", "-radius: 0;\n      border-bottom-", "-radius: 0;\n      width: 1.5rem;\n      height: 3rem;\n      ", ": ", ";\n    "])), function (_ref7) {
    var theme = _ref7.theme;
    return theme.BAR.background;
  }, placement, placement, placement, open ? place + 'rem' : '1rem');
});
BarToggle.propTypes = {
  onClick: func.isRequired,
  open: bool.isRequired,
  placement: string
};
BarToggle.defaultProps = {
  placement: 'left'
};
//# sourceMappingURL=toggle.js.map