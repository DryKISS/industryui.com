import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Toggle - Components - Switch
 */
// React
import React from 'react';
import { bool, func, oneOf } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var Switch = function Switch(_ref) {
  var context = _ref.context,
      disabled = _ref.disabled,
      handleToggle = _ref.handleToggle,
      size = _ref.size,
      toggled = _ref.toggled;
  return /*#__PURE__*/React.createElement(StyledSwitchContainer, {
    context: context,
    disabled: disabled,
    onClick: handleToggle,
    size: size,
    toggled: toggled
  }, /*#__PURE__*/React.createElement(StyledSwitch, {
    size: size,
    toggled: toggled
  }));
};
Switch.displayName = "Switch";
var StyledSwitchContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  cursor: ", ";\n  display: flex;\n  justify-content: space-between;\n  opacity: ", ";\n  position: relative;\n  transition: background-color 0.2s;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme,
      toggled = _ref2.toggled;
  return toggled ? theme.COLOUR[context] : '#cbd5e0';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 0.5 : 1;
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'sm' && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-radius: 40px;\n      height: 20px;\n      width: 40px;\n    "])));
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'md' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-radius: 60px;\n      height: 30px;\n      width: 60px;\n    "])));
}, function (_ref7) {
  var size = _ref7.size;
  return size === 'lg' && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-radius: 100px;\n      height: 50px;\n      width: 100px;\n    "])));
});
var StyledSwitch = styled.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: #fff;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: left 0.2s, transform 0.2s;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref8) {
  var toggled = _ref8.toggled;
  return toggled && "\n      left: calc(100% - 2px);\n      transform: translateX(-100%);\n    ";
}, function (_ref9) {
  var size = _ref9.size;
  return size === 'sm' && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-radius: 16px;\n      height: 16px;\n      width: 16px;\n    "])));
}, function (_ref10) {
  var size = _ref10.size;
  return size === 'md' && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-radius: 26px;\n      height: 26px;\n      width: 26px;\n    "])));
}, function (_ref11) {
  var size = _ref11.size;
  return size === 'lg' && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      border-radius: 46px;\n      height: 46px;\n      width: 46px;\n    "])));
});
Switch.propTypes = {
  handleToggle: func,
  size: oneOf(['sm', 'md', 'lg']),
  toggled: bool
};
//# sourceMappingURL=switch.js.map