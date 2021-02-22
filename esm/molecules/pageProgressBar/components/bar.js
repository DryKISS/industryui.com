import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Molecules - Page Progress Bar - Bar
 */
// React
import React from 'react';
import { number, string } from 'prop-types'; // Styled Components

import styled from 'styled-components';
export var Bar = function Bar(_ref) {
  var animationDuration = _ref.animationDuration,
      context = _ref.context,
      progress = _ref.progress;
  return /*#__PURE__*/React.createElement(StyledBar, {
    context: context,
    style: {
      marginLeft: "".concat((-1 + progress) * 100, "%"),
      transition: "margin-left ".concat(animationDuration, "ms linear")
    }
  });
};
Bar.displayName = "Bar";
Bar.propTypes = {
  animationDuration: number.isRequired,
  context: string,
  progress: number.isRequired
};
var StyledBar = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 0.25rem;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1031;\n"])), function (_ref2) {
  var context = _ref2.context,
      COLOUR = _ref2.theme.COLOUR;
  return COLOUR[context];
});
//# sourceMappingURL=bar.js.map