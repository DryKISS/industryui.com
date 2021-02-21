import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Components - Atoms - Details2 - Components - Header
 */
// React
import React from 'react';
import { bool, func, node, number, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Details2Icon } from './icon';
import { Text } from '../../text/text';
import { THEME_SIZE } from '../../../theme/constants/size';
export var Details2Header = function Details2Header(_ref) {
  var animationTime = _ref.animationTime,
      children = _ref.children,
      content = _ref.content,
      context = _ref.context,
      handleOpenClose = _ref.handleOpenClose,
      headerContext = _ref.headerContext,
      iconComponent = _ref.iconComponent,
      isOpen = _ref.isOpen,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Header, {
    context: headerContext,
    onClick: handleOpenClose
  }, /*#__PURE__*/React.createElement(Content, null, (content || children) && /*#__PURE__*/React.createElement(Details2Icon, {
    animationDuration: animationTime,
    iconComponent: iconComponent,
    isOpen: isOpen
  }), /*#__PURE__*/React.createElement(Text, {
    size: THEME_SIZE.MD,
    context: context,
    content: title
  })));
};
Details2Header.displayName = "Details2Header";
var Header = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  cursor: pointer;\n  display: flex;\n  height: 3.5rem;\n  justify-content: space-between;\n  padding: 0 1rem;\n"])), function (_ref2) {
  var theme = _ref2.theme,
      context = _ref2.context;
  return theme.COLOUR[context] || theme.DETAILS2.header.background;
});
var Content = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
Details2Header.propTypes = {
  animationTime: number,
  children: node,
  content: node,
  context: string,
  handleOpenClose: func.isRequired,
  iconComponent: node,
  isOpen: bool,
  title: string.isRequired
};
Details2Header.defaultProps = {
  animationTime: 100,
  context: 'dark',
  isOpen: false
};
//# sourceMappingURL=header.js.map