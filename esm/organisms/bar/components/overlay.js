import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Organisms - Bar - Components - Overlay
 */
// React
import { bool, func, number, oneOf } from 'prop-types'; // UI

import { BarConfig } from './config'; // Style

import styled, { css } from 'styled-components';
export var BarOverlay = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  transition: ", ";\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var BAR = _ref.theme.BAR,
      placement = _ref.placement;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    opacity ", "\n    ", ",\n    ", "\n    ", "\n    ", ";\n  "])), BAR.transitionDuration, BAR.transitionTiming, placement, BAR.transitionDuration, BAR.transitionTiming);
}, function (_ref2) {
  var placement = _ref2.placement,
      variant = _ref2.variant,
      width = _ref2.width;
  return variant === BarConfig.VARIANT.OVERLAY && (placement === BarConfig.PLACEMENT.LEFT || placement === BarConfig.PLACEMENT.RIGHT) && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      width: calc(100%);\n      height: 100%;\n      background-color: rgba(0, 0, 0, 0.5);\n      opacity: 1;\n      top: 0;\n      position: fixed;\n      z-index: 1;\n      ", ": ", "rem;\n    "])), placement, width);
}, function (_ref3) {
  var open = _ref3.open,
      placement = _ref3.placement;
  return !open && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      opacity: 0;\n      pointer-events: none;\n      width: 100%;\n      ", ": 0;\n    "])), placement);
});
BarOverlay.propTypes = {
  onClick: func.isRequired,
  open: bool,
  placement: oneOf(Object.values(BarConfig.PLACEMENT)),
  variant: oneOf(['push', 'overlay']),
  width: number
};
BarOverlay.defaultProps = {
  open: true,
  placement: 'left',
  variant: 'overlay',
  width: 10
};
//# sourceMappingURL=overlay.js.map