import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject;

/**
 * Components - Form - Error
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Space } from '../../';
import { THEME_SIZE } from '../../theme/constants/size';
export var FormError = function FormError(_ref) {
  var message = _ref.message,
      colour = _ref.colour,
      props = _objectWithoutProperties(_ref, ["message", "colour"]);

  return /*#__PURE__*/React.createElement(Space, {
    marginTop: THEME_SIZE.XS
  }, /*#__PURE__*/React.createElement(StyledSmall, {
    color: colour
  }, message));
};
FormError.displayName = "FormError";
export var StyledSmall = styled.small(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  display: block;\n  font-size: 0.625rem;\n  font-weight: 400;\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme,
      colour = _ref2.colour;
  return colour !== null && colour !== void 0 ? colour : theme.COLOUR.danger;
});
FormError.propTypes = {
  message: string.isRequired,
  colour: string
};
//# sourceMappingURL=error.js.map