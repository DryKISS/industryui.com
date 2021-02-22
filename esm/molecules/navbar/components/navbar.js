import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Components - Molecules - Navbar — Navbar
 */
// React
import React, { useState } from 'react';
import { bool, object, objectOf, oneOfType, number, string } from 'prop-types'; // UI

import { Brand, Contained, MEDIA_QUERY, Toggler } from '../../../';
import { NavWidgets } from '../components/widgets/widgets'; // Style

import styled from 'styled-components';
export var Navbar = function Navbar(_ref) {
  var brand = _ref.brand,
      contained = _ref.contained,
      type = _ref.type,
      style = _ref.style,
      showMenu = _ref.showMenu,
      widgets = _ref.widgets;

  var _useState = useState(showMenu),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleClick = function handleClick() {
    setVisible(!visible);
  };

  var Content = function Content() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, brand && /*#__PURE__*/React.createElement(Brand, {
      brand: brand
    }), /*#__PURE__*/React.createElement(Toggler, {
      handleMenuClick: handleClick,
      visible: visible
    }), widgets && /*#__PURE__*/React.createElement(NavWidgets, {
      brand: brand,
      closeMenu: handleClick,
      type: type,
      visible: visible,
      widgets: widgets
    }));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledNav, {
    style: style
  }, contained ? /*#__PURE__*/React.createElement(Contained, {
    content: Content
  }) : /*#__PURE__*/React.createElement(Content, null)), /*#__PURE__*/React.createElement(StyledOverlay, {
    hidden: !visible
  }));
};
var StyledNav = styled.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-bottom: ", ";\n  border-top-width: ", ";\n  border-top-style: ", ";\n  border-top-color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  height: ", ";\n  justify-content: space-between;\n  padding: ", ";\n  position: relative;\n  z-index: 200;\n  ", "\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.background;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.borderBottom;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.NAVBAR.borderTopWidth;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.borderTopStyle;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.NAVBAR.borderTopColor;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.NAVBAR.height;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.NAVBAR.padding;
}, MEDIA_QUERY.tablet(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: ", ";\n  "])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.NAVBAR.paddingTablet;
}), MEDIA_QUERY.desktop(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: ", ";\n  "])), function (_ref10) {
  var theme = _ref10.theme;
  return theme.NAVBAR.paddingDesktop;
}));
var StyledOverlay = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: ", ";\n  bottom: 0;\n  cursor: pointer;\n  height: ", ";\n  position: ", ";\n  right: 0;\n  top: 0;\n  transition-property: width;\n  transition-duration: 0.2s;\n  width: ", ";\n  z-index: 199;\n  ", "\n"])), function (_ref11) {
  var theme = _ref11.theme;
  return theme.NAVBAR.backgroundOverlay;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.NAVBAR.heightOverlay;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.NAVBAR.positionOverlay;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.NAVBAR.widthOverlay;
}, MEDIA_QUERY.desktop(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    display: none;\n  "]))));
Navbar.propTypes = {
  brand: string,
  contained: bool,
  showMenu: bool,
  style: objectOf(oneOfType([number, string])),
  type: string,
  widgets: object
};
Navbar.defaultProps = {
  brand: '',
  contained: false,
  showMenu: false
};
//# sourceMappingURL=navbar.js.map