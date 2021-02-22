import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Components - Form - Input Group - Addon
 * Allows the element to be positioned
 */
// React
import React from 'react';
import { any, bool, node, oneOf } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // Context

import { THEME_CONTEXT } from '../../theme/constants/context';
import { THEME_SIZE } from '../../theme/constants/size';
export var InputGroupAddon = function InputGroupAddon(_ref) {
  var addonType = _ref.addonType,
      className = _ref.className,
      children = _ref.children,
      context = _ref.context,
      error = _ref.error,
      size = _ref.size,
      text = _ref.text,
      theme = _ref.theme;
  return /*#__PURE__*/React.createElement(StyledInputGroupAddon, {
    addonType: addonType,
    className: addonType,
    children: children,
    context: context,
    error: error,
    size: size,
    text: text,
    theme: theme
  });
};
InputGroupAddon.displayName = "InputGroupAddon";
var StyledInputGroupAddon = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n\n  & > * {\n    height: 100%;\n  }\n\n  ", "\n  ", "\n\n  &,\n  button {\n    ", "\n\n    ", "\n  }\n"])), function (_ref2) {
  var text = _ref2.text;
  return text && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border: 1px solid\n        ", ";\n      border-radius: ", ";\n      color: ", ";\n      display: flex;\n      font-size: 0.75rem;\n      font-weight: 400;\n      line-height: 1;\n      margin-bottom: 0;\n      padding: 0.375rem 1.25rem;\n      text-align: center;\n      transition: background-color 0.15s linear;\n      white-space: nowrap;\n    "])), function (_ref3) {
    var theme = _ref3.theme,
        error = _ref3.error;
    return error ? theme.COLOUR.danger : theme.COLOUR.grey;
  }, function (_ref4) {
    var theme = _ref4.theme,
        error = _ref4.error;
    return error ? theme.COLOUR.danger : theme.COLOUR.grey80;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.FORM_ELEMENTS_STYLES.inputBorderRadius;
  }, function (_ref6) {
    var theme = _ref6.theme,
        error = _ref6.error;
    return error ? theme.COLOUR.light : theme.COLOUR.dark;
  });
}, function (_ref7) {
  var size = _ref7.size;
  return size === THEME_SIZE.SM && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      font-size: 0.625rem;\n      padding: 0 0.75rem;\n    "])));
}, function (_ref8) {
  var addonType = _ref8.addonType;
  return addonType === 'prepend' && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        margin-right: -1px;\n      "])));
}, function (_ref9) {
  var addonType = _ref9.addonType;
  return addonType === 'append' && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        margin-left: -1px;\n      "])));
});
InputGroupAddon.propTypes = {
  addonType: oneOf(['prepend', 'append']),
  className: any,
  children: node,
  context: oneOf(Object.values(THEME_CONTEXT)),
  text: bool
};
InputGroupAddon.defaultProps = {
  addonType: 'append',
  context: 'light'
};
//# sourceMappingURL=addon.js.map