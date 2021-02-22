import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Molecules - OffCanvas - Overlay
 */
// React
import { bool, number, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var OffCanvasOverlay = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: rgba(\n    0,\n    0,\n    0,\n    ", "\n  );\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  transition: background-color ", "ms ease-in-out;\n  width: 100vw;\n  will-change: background-color;\n  z-index: 9998;\n"])), function (_ref) {
  var opacity = _ref.opacity,
      show = _ref.show;
  return show ? opacity : 0;
}, function (_ref2) {
  var duration = _ref2.duration;
  return duration;
});
OffCanvasOverlay.propTypes = {
  duration: number,
  opacity: number,
  show: bool,
  width: string
};
OffCanvasOverlay.defaultProps = {
  duration: 300,
  opacity: 0.3
};
//# sourceMappingURL=overlay.js.map