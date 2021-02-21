import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Components - Atoms - Details2 - Components - Icon
 */
// React
import React from 'react';
import { bool, node, number } from 'prop-types'; // Style

import styled from 'styled-components';
export var Details2Icon = function Details2Icon(_ref) {
  var animationTime = _ref.animationTime,
      iconComponent = _ref.iconComponent,
      isOpen = _ref.isOpen;
  return /*#__PURE__*/React.createElement(OpenCloseWrapper, {
    isOpen: isOpen,
    animationTime: animationTime
  }, iconComponent !== null && iconComponent !== void 0 ? iconComponent : /*#__PURE__*/React.createElement(CaretRight, null));
};
Details2Icon.displayName = "Details2Icon";
var OpenCloseWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-right: 0.75rem;\n  transform: rotate(", ");\n  transition-duration: ", ";\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n"])), function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? '90deg' : '0deg';
}, function (_ref3) {
  var animationTime = _ref3.animationTime;
  return (animationTime !== null && animationTime !== void 0 ? animationTime : 300) + 'ms';
});
var CaretRight = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid ", ";\n  border-top: 5px solid transparent;\n  height: 0;\n  width: 0;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.dark;
});
Details2Icon.propTypes = {
  animationTime: number,
  iconComponent: node,
  isOpen: bool
};
Details2Icon.defaultProps = {
  animationTime: 100,
  isOpen: false
};
//# sourceMappingURL=icon.js.map