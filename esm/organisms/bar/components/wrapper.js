import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

/**
 * Components - Organisms - Bar - Components - Wrapper
 */
// React
import { bool, node, number, oneOf, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { BarConfig } from './config';
export var BarWrapper = styled.aside(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 1rem;\n  position: relative;\n  transition-duration: ", ";\n  transition-property: left, opacity, right, width;\n  transition-timing-function: ", ";\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.BAR.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.BAR.transitionDuration;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.BAR.transitionTiming;
}, function (_ref4) {
  var minSize = _ref4.minSize,
      open = _ref4.open,
      placement = _ref4.placement,
      theme = _ref4.theme,
      width = _ref4.width;
  return placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          flex-direction: row;\n          height: ", ";\n          width: 100%;\n        "])), minSize !== null && minSize !== void 0 ? minSize : theme.BAR.minSize) : open ? css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          width: ", "rem;\n        "])), width) : css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          width: ", ";\n        "])), minSize !== null && minSize !== void 0 ? minSize : theme.BAR.minSize);
}, function (_ref5) {
  var minSize = _ref5.minSize,
      open = _ref5.open,
      placement = _ref5.placement,
      theme = _ref5.theme,
      variant = _ref5.variant;
  return variant === BarConfig.VARIANT.OVERLAY ? css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          opacity: 1;\n          position: fixed;\n          z-index: 1;\n          ", ": 0;\n          ", "\n          ", "\n          ", "\n        "])), placement, (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n            top: 0;\n          "]))), !open && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n                background-color: transparent;\n                box-shadow: none;\n                margin-", ":-", ";\n            "])), placement, minSize !== null && minSize !== void 0 ? minSize : theme.BAR.minSize), (placement === BarConfig.PLACEMENT.TOP || placement === BarConfig.PLACEMENT.BOTTOM) && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            left: 0;\n          "])))) : css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n          float: ", ";\n        "])), placement);
});
BarWrapper.propTypes = {
  children: node,
  minSize: string,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  variant: oneOf(['push', 'overlay']),
  width: number
};
BarWrapper.defaultProps = {
  placement: 'left',
  variant: 'overlay',
  width: 10
};
//# sourceMappingURL=wrapper.js.map