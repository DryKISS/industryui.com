import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Card footer
 */
// React
import React from 'react';
import { oneOf, node } from 'prop-types'; // UI

import { THEME_CONTEXT } from '../../../theme/constants/context'; // Style

import styled from 'styled-components';
export var CardFooter = function CardFooter(_ref) {
  var children = _ref.children,
      context = _ref.context;
  return /*#__PURE__*/React.createElement(StyledFooter, {
    context: context
  }, children);
};
CardFooter.displayName = "CardFooter";
var StyledFooter = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0 0 0.25rem 0.25rem;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n  min-height: 4.5rem;\n  padding: 0.75rem;\n  text-align: center;\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
}, function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white;
});
CardFooter.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  children: node
};
CardFooter.defaultProps = {
  context: 'light'
};
//# sourceMappingURL=footer.js.map