import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Sidebar
 */
// React
import React from 'react';
import { array, string } from 'prop-types'; // UI

import { Divider, Image, Icon, Link, List, ListItem } from '../../'; // Style

import styled, { css } from 'styled-components';
export var Sidebar = function Sidebar(_ref) {
  var brand = _ref.brand,
      data = _ref.data;

  var link = function link(icon, name, to) {
    var iconArray = Array.isArray(icon);
    return /*#__PURE__*/React.createElement(Link, {
      to: to,
      passHref: true
    }, /*#__PURE__*/React.createElement(StyledLink, null, icon && /*#__PURE__*/React.createElement(Icon, {
      icon: icon ? iconArray ? icon[1] : icon : null,
      prefix: icon && iconArray && icon[0]
    }), name));
  };

  return /*#__PURE__*/React.createElement(StyledAside, null, /*#__PURE__*/React.createElement(StyledBrand, null, /*#__PURE__*/React.createElement(Image, {
    alt: "Logo",
    src: brand
  })), /*#__PURE__*/React.createElement(List, {
    group: true
  }, data.map(function (_ref2, index) {
    var Component = _ref2.Component,
        divider = _ref2.divider,
        icon = _ref2.icon,
        name = _ref2.name,
        to = _ref2.to;
    return /*#__PURE__*/React.createElement(StyledLi, {
      key: index
    }, divider ? /*#__PURE__*/React.createElement(StyledDivider, {
      size: "sm"
    }) : Component ? /*#__PURE__*/React.createElement(Component, null) : to ? link(icon, name, to) : name);
  })));
};
Sidebar.displayName = "Sidebar";
var StyledAside = styled.aside(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  box-shadow: 0 0 4rem -1rem rgba(0, 0, 0, 0.75);\n  height: 100vh;\n  left: 0;\n  overflow: hidden;\n  padding: 1rem 0;\n  position: fixed;\n  top: 0;\n  width: 16.66667%;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.SIDEBAR.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.SIDEBAR.highlight;
});
var StyledBrand = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0 3rem;\n  line-height: 2;\n"])));
var StyledDivider = styled(Divider)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-top-width: 1px;\n  opacity: 0.2;\n"])));
var StyledLi = styled(ListItem)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 0;\n\n  svg {\n    margin-right: 0.5rem;\n  }\n\n  &:hover {\n    ", "\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      border-right: 2px solid ", ";\n\n      a {\n        color: ", ";\n      }\n    "])), theme.SIDEBAR.linkHover, theme.SIDEBAR.highlight, theme.SIDEBAR.highlight);
});
var StyledLink = styled.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  display: block;\n  padding: 1rem 1.5rem;\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.SIDEBAR.linkColour;
});
Sidebar.propTypes = {
  brand: string,
  data: array.isRequired
};
//# sourceMappingURL=sidebar.js.map