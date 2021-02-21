import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Resize Detector
 */
// React
import React, { memo } from 'react'; // Utils

import { withResizeDetector } from 'react-resize-detector';
import styled from 'styled-components';
export var ResizeDetector = withResizeDetector( /*#__PURE__*/memo(function (_ref) {
  var height = _ref.height,
      onResize = _ref.onResize,
      style = _ref.style,
      width = _ref.width;
  typeof window !== 'undefined' && window.requestAnimationFrame(function () {
    return onResize({
      height: height,
      width: width
    });
  });
  return /*#__PURE__*/React.createElement(ResizeDetectorWrapper, {
    style: style
  });
}, function (_ref2, _ref3) {
  var prevWidth = _ref2.width;
  var nextWidth = _ref3.width;
  return prevWidth === nextWidth;
}));
var ResizeDetectorWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
//# sourceMappingURL=index.js.map