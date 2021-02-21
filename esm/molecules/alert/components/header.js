import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Alert - Components - Header
 */
// React
import React from 'react';
import { oneOf, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Icon, shadeLinearRgb } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
export var AlertHeader = function AlertHeader(_ref) {
  var context = _ref.context,
      header = _ref.header,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix;
  return /*#__PURE__*/React.createElement(StyledHeader, {
    context: context
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    context: "help",
    icon: icon,
    prefix: iconPrefix
  }), ' ', header);
};
AlertHeader.displayName = "AlertHeader";
var StyledHeader = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  color: #fff;\n  font-weight: 600;\n  letter-spacing: 1px;\n  padding: 0.5rem 1.25rem;\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return shadeLinearRgb(-0.4, theme.COLOUR[context]);
});
AlertHeader.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  header: string.isRequired,
  icon: string,
  iconPrefix: string
};
//# sourceMappingURL=header.js.map