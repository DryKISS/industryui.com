import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Components - Form - Input Group - Group
 * Wraps the Input so we can append or prepend another element
 */
// React
import React from 'react';
import { bool, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var InputGroup = function InputGroup(_ref) {
  var children = _ref.children,
      error = _ref.error,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement(StyledInputGroup, {
    children: children,
    error: error,
    fullWidth: fullWidth,
    size: size,
    theme: theme
  });
};
InputGroup.displayName = "InputGroup";
var StyledInputGroup = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: stretch;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  width: 100%;\n\n  input {\n    ", "\n    min-width: 0;\n    margin-bottom: 0;\n    position: relative;\n\n    :not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n\n    :first-child {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n\n    :not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  ", "\n"])), function (_ref2) {
  var fullWidth = _ref2.fullWidth;
  return fullWidth ? 'flex: 1 1 0%;' : 'width: auto;';
}, function (_ref3) {
  var error = _ref3.error,
      theme = _ref3.theme;
  return error && theme && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      &:hover {\n        .prepend,\n        .append {\n          background: ", ";\n          border-color: ", ";\n        }\n      }\n    "])), theme.COLOUR.danger, theme.COLOUR.danger);
});
InputGroup.propTypes = {
  fullWidth: bool,
  size: string
};
InputGroup.defaultProps = {
  fullWidth: true,
  size: 'md'
};
//# sourceMappingURL=group.js.map