import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Components - Molecules - Navbar — Widgets
 */
// React
import React from 'react';
import { bool, func, object, string } from 'prop-types'; // UI

import { MEDIA_QUERY, NavButton, NavCollapse, NavDropdown, NavIcon, NavLink, NavNotification } from '../../../../'; // Style

import styled, { css } from 'styled-components';
export var NavWidgets = function NavWidgets(_ref) {
  var brand = _ref.brand,
      closeMenu = _ref.closeMenu,
      type = _ref.type,
      visible = _ref.visible,
      widgets = _ref.widgets;
  return /*#__PURE__*/React.createElement(NavCollapse, {
    visible: visible
  }, Object.entries(widgets).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        direction = _ref3[0],
        link = _ref3[1];

    return /*#__PURE__*/React.createElement(StyledList, {
      direction: direction,
      key: direction
    }, link.map(function (_ref4) {
      var active = _ref4.active,
          Component = _ref4.Component,
          icon = _ref4.icon,
          id = _ref4.id,
          name = _ref4.name,
          onClick = _ref4.onClick,
          position = _ref4.position,
          prefix = _ref4.prefix,
          to = _ref4.to,
          type = _ref4.type;
      return /*#__PURE__*/React.createElement(StyledListItem, {
        brand: brand,
        key: id
      }, Component && /*#__PURE__*/React.createElement(Component, null), type && type.as === 'button' && NavButton({
        closeMenu: closeMenu,
        id: id,
        name: name,
        to: to,
        type: type,
        visible: visible
      }), type && type.as === 'icon' && NavIcon({
        closeMenu: closeMenu,
        to: to,
        type: type,
        visible: visible
      }), type && type.as === 'dropdown' && NavDropdown({
        closeMenu: closeMenu,
        icon: icon,
        name: name,
        position: position,
        prefix: prefix,
        type: type
      }), type && type.as === 'notification' && NavNotification({
        closeMenu: closeMenu,
        to: to,
        type: type,
        visible: visible
      }), !Component && (!type || type.as === 'link') && NavLink({
        active: active,
        closeMenu: closeMenu,
        id: id,
        name: name,
        onClick: onClick,
        to: to,
        visible: visible
      }));
    }));
  }));
};
NavWidgets.displayName = "NavWidgets";
var StyledList = styled.ul(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-size: ", ";\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  ", "\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.backgroundList;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.NAVBAR.fontSizeList;
}, MEDIA_QUERY.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: initial;\n    flex-direction: row;\n    flex: 1;\n    justify-content: ", ";\n    text-align: left;\n  "])), function (_ref7) {
  var direction = _ref7.direction;
  return direction === 'left' ? 'flex-start' : 'flex-end';
}));
var StyledListItem = styled.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  border-top: ", ";\n  background-color: ", ";\n  &:hover {\n    background-color: ", ";\n    border-bottom: ", ";\n  }\n  ", "\n  ", "\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.NAVBAR.borderTopListItem;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.NAVBAR.backgroundListItem;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.NAVBAR.backgroundHoverListItem;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.NAVBAR.borderBottomHoverListItem;
}, function (props) {
  return !props.brand && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      &:first-child {\n        margin-left: 0;\n      }\n    "])));
}, MEDIA_QUERY.desktop(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border: none;\n    display: flex;\n    flex-direction: column;\n    justify-content: ", ";\n    margin-bottom: ", ";\n  "])), function (_ref12) {
  var theme = _ref12.theme;
  return theme.NAVBAR.justifyContentDesktopListItem;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.NAVBAR.marginBottomDesktopListItem;
}));
NavWidgets.propTypes = {
  brand: string,
  closeMenu: func,
  type: string,
  visible: bool,
  widgets: object.isRequired
};
//# sourceMappingURL=widgets.js.map