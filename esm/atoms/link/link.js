import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";

var _templateObject;

/**
 * Link
 */
// React
import React from 'react'; // Next

import NextLink from 'next/link'; // Style

import styled from 'styled-components'; // UI

import { shadeLinearRgb } from '../../utils/colour/colour';
import { validatorUri } from '../../utils/validator/uri';
import { THEME_CONTEXT } from '../../theme/constants/context'; // Props

import { defaultProps, propTypes } from './props';
export var Link = function Link(_ref) {
  var border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      context = _ref.context,
      fullWidth = _ref.fullWidth,
      onClick = _ref.onClick,
      passHref = _ref.passHref,
      prefetch = _ref.prefetch,
      replace = _ref.replace,
      scroll = _ref.scroll,
      shallow = _ref.shallow,
      target = _ref.target,
      to = _ref.to;
  var obj = _typeof(to) === 'object' ? to : {
    href: to
  };
  return !validatorUri(to) ? /*#__PURE__*/React.createElement(NextLink, _extends({}, obj, {
    passHref: passHref,
    prefetch: prefetch,
    replace: replace,
    scroll: scroll,
    shallow: shallow
  }), /*#__PURE__*/React.createElement(StyledLink, {
    border: border,
    className: className,
    context: context,
    fullWidth: fullWidth,
    onClick: onClick,
    target: target
  }, children)) : /*#__PURE__*/React.createElement(StyledLink, {
    border: border,
    className: className,
    context: context,
    fullWidth: fullWidth,
    href: to,
    target: target
  }, children);
};
export var StyledLink = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border-bottom: ", ";\n  display: ", ";\n  color: ", ";\n  cursor: pointer;\n  max-width: 100%;\n  outline: none;\n  text-decoration: none;\n  width: ", ";\n\n  &:hover,\n  &.link--hover {\n    border-bottom: ", ";\n    color: ", ";\n  }\n\n  &:active,\n  &.link--active {\n    border-bottom: ", ";\n    color: ", ";\n  }\n\n  &:visited,\n  &.link--visited {\n    border-bottom: ", ";\n    color: ", ";\n  }\n"])), function (_ref2) {
  var border = _ref2.border,
      context = _ref2.context,
      theme = _ref2.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.88, theme.COLOUR[context] || theme.LINK.colour));
}, function (_ref3) {
  var border = _ref3.border;
  return border ? 'inline-block' : 'block';
}, function (_ref4) {
  var context = _ref4.context,
      theme = _ref4.theme;

  if (context === THEME_CONTEXT.INITIAL) {
    return THEME_CONTEXT.INITIAL;
  }

  return theme.COLOUR[context] || theme.LINK.colour;
}, function (_ref5) {
  var fullWidth = _ref5.fullWidth;
  return fullWidth ? '100%' : 'initial';
}, function (_ref6) {
  var border = _ref6.border,
      context = _ref6.context,
      theme = _ref6.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.8, theme.COLOUR[context] || theme.LINK.colour));
}, function (_ref7) {
  var context = _ref7.context,
      theme = _ref7.theme;
  return shadeLinearRgb(-0.2, theme.COLOUR[context] || theme.LINK.colour);
}, function (_ref8) {
  var border = _ref8.border,
      theme = _ref8.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.8, theme.LINK.active));
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.LINK.active;
}, function (_ref10) {
  var border = _ref10.border,
      theme = _ref10.theme;
  return border && "2px solid ".concat(shadeLinearRgb(0.8, theme.LINK.visited));
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.LINK.visited;
});
Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
//# sourceMappingURL=link.js.map