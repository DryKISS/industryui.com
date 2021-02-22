import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Components - Molecules - Navbar - Widgets - Button
 */
// React
import React from 'react';
import { bool, string, func } from 'prop-types'; // UI

import { Button, Link, MEDIA_QUERY_MAX } from '../../../../'; // Style

import styled from 'styled-components';
export var NavButton = function NavButton(_ref) {
  var closeMenu = _ref.closeMenu,
      id = _ref.id,
      name = _ref.name,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(StyledLink, {
    border: false,
    passHref: true,
    to: to
  }, /*#__PURE__*/React.createElement(StyledButton, {
    id: id,
    context: type.context,
    content: name,
    onClick: visible ? closeMenu : function () {},
    outline: type.outline,
    size: type.size,
    type: type.as
  }));
};
NavButton.displayName = "NavButton";
var StyledLink = styled(Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0rem 0.75rem;\n"])));
var StyledButton = styled(Button)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), MEDIA_QUERY_MAX.desktop(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background: none;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    font-size: 0.8125rem;\n    padding: 1rem 0.75rem;\n    width: 100%;\n\n    &:hover {\n      color: ", ";\n      background: none;\n    }\n  "])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourActive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.primary;
}));
NavButton.propTypes = {
  closeMenu: func,
  id: string.isRequired,
  name: string.isRequired,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
};
NavButton.defaultProps = {
  visible: false
};
//# sourceMappingURL=button.js.map