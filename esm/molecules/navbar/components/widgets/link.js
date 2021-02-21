import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Navbar — Widgets — Link
 */
// React
import React from 'react';
import { bool, string, func } from 'prop-types'; // UI

import { Link, MEDIA_QUERY } from '../../../../'; // Style

import styled from 'styled-components';
export var NavLink = function NavLink(_ref) {
  var active = _ref.active,
      closeMenu = _ref.closeMenu,
      id = _ref.id,
      name = _ref.name,
      onClick = _ref.onClick,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;

  var handleClick = function handleClick() {
    visible && closeMenu();
    onClick && onClick();
  };

  if (type && (!active || active !== type)) {
    return;
  }

  return /*#__PURE__*/React.createElement(Link, {
    border: false,
    onClick: handleClick,
    passHref: true,
    to: to
  }, /*#__PURE__*/React.createElement(StyledLink, {
    id: id
  }, name));
};
NavLink.displayName = "NavLink";
var StyledLink = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  padding: ", ";\n  /* &:hover {\n    color: ", ";\n  } */\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourDefault;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.paddingLink;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.NAVBAR.colourHover;
}, MEDIA_QUERY.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    // &:hover {\n    //   color: ", ";\n    // }\n  "])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.colourDefaultDesktop;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.NAVBAR.colourHoverDesktop;
}));
NavLink.propTypes = {
  active: string,
  closeMenu: func,
  id: string.isRequired,
  name: string.isRequired,
  onClick: func,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
};
NavLink.defaultProps = {
  visible: false
};
//# sourceMappingURL=link.js.map