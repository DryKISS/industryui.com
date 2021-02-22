import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Card header
 */
// React
import React from 'react';
import { oneOf, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { shadeLinearRgb } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
export var CardHeader = function CardHeader(_ref) {
  var content = _ref.content,
      context = _ref.context,
      align = _ref.align;
  return /*#__PURE__*/React.createElement(StyledHeader, {
    align: align,
    context: context
  }, content);
};
CardHeader.displayName = "CardHeader";
var StyledHeader = styled.h2(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  color: ", ";\n  font-size: 1.25rem;\n  margin: 0;\n  padding: 0.75rem 0.5rem;\n  text-align: ", ";\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return shadeLinearRgb(0.8, theme.COLOUR[context]);
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return theme.COLOUR[context];
}, function (_ref4) {
  var align = _ref4.align;
  return align;
});
CardHeader.propTypes = {
  content: string.isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  align: oneOf(['center', 'right', 'left'])
};
CardHeader.defaultProps = {
  align: 'center'
};
//# sourceMappingURL=header.js.map