import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Close
 */
// React
import React from 'react';
import { any, func, oneOf, string } from 'prop-types'; // UI

import { Button } from '../../atoms/button';
import { Icon } from '../../';
import { THEME_CONTEXT } from '../../theme/constants/context'; // Style

import styled from 'styled-components';
export var Close = function Close(_ref) {
  var className = _ref.className,
      click = _ref.click,
      context = _ref.context,
      icon = _ref.icon,
      prefix = _ref.prefix;
  return /*#__PURE__*/React.createElement(StyledButton, {
    className: className,
    context: context,
    onClick: click
  }, /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    context: context,
    icon: icon,
    prefix: prefix
  }));
};
Close.displayName = "Close";
var StyledButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: 0;\n  color: ", ";\n  cursor: pointer;\n  float: right;\n  font-size: 1.5rem;\n  height: auto;\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n  text-shadow: 0 1px 0 #fff;\n  z-index: 10000;\n\n  &:hover {\n    background-color: transparent;\n    color: #000;\n    opacity: 0.8;\n    text-decoration: none;\n  }\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
});
Close.propTypes = {
  className: any,
  click: func.isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  icon: string,
  prefix: string
};
Close.defaultProps = {
  context: 'dark',
  icon: 'times-circle',
  prefix: 'fas'
};
//# sourceMappingURL=close.js.map