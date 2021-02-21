import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Components - Atoms - Avatar
 */
// React
import React from 'react'; // Gravatar

import gravatar from 'gravatar'; // Style

import styled, { css } from 'styled-components'; // UI

import { getAcronym, Image } from '../../';
import { themeFontSize } from '../../theme/utils/fontSize';
import { THEME_SIZE } from '../../theme/constants/size'; // Props

import { propTypes, defaultProps } from './props';
export var Avatar = function Avatar(_ref) {
  var action = _ref.action,
      actionClick = _ref.actionClick,
      children = _ref.children,
      className = _ref.className,
      click = _ref.click,
      content = _ref.content,
      context = _ref.context,
      gmail = _ref.gmail,
      size = _ref.size,
      src = _ref.src,
      style = _ref.style;
  var avatarSrc = src || gmail && gravatar.url(gmail, {
    d: 'identicon'
  });
  return /*#__PURE__*/React.createElement(StyledAvatar, {
    className: className,
    context: context,
    onClick: click,
    size: size,
    style: style
  }, children || avatarSrc && /*#__PURE__*/React.createElement(Image, {
    alt: "Avatar",
    src: avatarSrc
  }) || getAcronym(content), action && /*#__PURE__*/React.createElement(StyledAction, {
    onClick: actionClick
  }, action));
};
Avatar.displayName = "Avatar";
var StyledAction = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.5);\n  bottom: 0;\n  color: #fff;\n  cursor: pointer;\n  font-size: ", ";\n  left: 0;\n  padding: 4px;\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  transition: all 0.1s ease-in-out;\n  text-align: center;\n  visibility: hidden;\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.TYPOGRAPHY.fontSizeBase;
});
var StyledAvatar = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background: ", ";\n  border-radius: 50%;\n  box-sizing: border-box;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  object-fit: cover;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    ", " {\n      visibility: visible;\n      opacity: 1;\n    }\n  }\n"])), function (_ref3) {
  var context = _ref3.context,
      theme = _ref3.theme;
  return context ? theme.COLOUR[context] : theme.AVATAR.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.AVATAR.colour;
}, function (props) {
  return themeFontSize(props);
}, function (_ref5) {
  var size = _ref5.size,
      theme = _ref5.theme;
  var sizeIndex = size && Object.values(THEME_SIZE).indexOf(size);
  var dimension = theme.TYPOGRAPHY.fontSizes[sizeIndex] + 24;
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      height: ", "px;\n      min-width: ", "px;\n      width: ", "px;\n    "])), dimension, dimension, dimension);
}, StyledAction);
Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
//# sourceMappingURL=avatar.js.map