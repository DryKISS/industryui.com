import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Components - Atoms - Badge
 */
// React
import React from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { Icon } from '../icon/icon/icon';
import { themeBackground } from '../../theme/utils/background';
import { themeFontSize } from '../../theme/utils/fontSize'; // Props

import { defaultProps, propTypes } from './props';
export var Badge = function Badge(_ref) {
  var children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      context = _ref.context,
      icon = _ref.icon,
      iconPrefix = _ref.iconPrefix,
      shape = _ref.shape,
      size = _ref.size,
      style = _ref.style,
      to = _ref.to;
  return /*#__PURE__*/React.createElement(StyledBadge, {
    className: className,
    context: context,
    href: to,
    itemProp: "keywords",
    shape: shape,
    size: size,
    style: style
  }, icon && /*#__PURE__*/React.createElement(StyledIcon, {
    icon: icon,
    prefix: iconPrefix
  }), content || children);
};
Badge.displayName = "Badge";
var StyledBadge = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: inline-block;\n  line-height: 1;\n  margin: 0 0.5em 0.5em 0;\n  padding: ", ";\n  font-size: ", ";\n  text-align: center;\n  vertical-align: baseline;\n  white-space: nowrap;\n  transition: all 0.1s ease-in-out;\n  text-decoration: none;\n  cursor: default;\n\n  ", "\n\n  &:empty {\n    display: none;\n  }\n"])), function (props) {
  return themeBackground(props);
}, function (props) {
  return themeFontSize(props);
}, function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return context !== 'white' ? 'none' : '1px solid ' + theme.COLOUR.dark;
}, function (_ref3) {
  var shape = _ref3.shape,
      theme = _ref3.theme;
  return theme.BADGE.BORDER_RADIUS[shape];
}, function (_ref4) {
  var theme = _ref4.theme,
      context = _ref4.context;
  return context !== 'white' ? theme.COLOUR.white : theme.COLOUR.black;
}, function (_ref5) {
  var size = _ref5.size,
      theme = _ref5.theme;
  return theme.BADGE.PADDING[size];
}, function (_ref6) {
  var size = _ref6.size,
      theme = _ref6.theme;
  return theme.BADGE.FONT_SIZE[size];
}, function (_ref7) {
  var href = _ref7.href;
  return href && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      &:hover {\n        opacity: 0.7;\n        cursor: pointer;\n      }\n    "])));
});
var StyledIcon = styled(Icon)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-right: 5px;\n"])));
Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
//# sourceMappingURL=badge.js.map