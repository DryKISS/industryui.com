import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Navbar - Widgets - Dropdown
 */
// React
import React from 'react';
import { func, object, string } from 'prop-types'; // UI

import { Icon, MEDIA_QUERY } from '../../../../';
import { Dropdown } from '../../../dropdown'; // Style

import styled from 'styled-components';
export var NavDropdown = function NavDropdown(_ref) {
  var closeMenu = _ref.closeMenu,
      icon = _ref.icon,
      name = _ref.name,
      position = _ref.position,
      prefix = _ref.prefix,
      type = _ref.type;
  return /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(StyledDropdown, {
    items: type.items,
    onChange: closeMenu,
    position: position
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": "true",
    icon: icon,
    prefix: prefix
  }), /*#__PURE__*/React.createElement(StyledContent, null, name)));
};
NavDropdown.displayName = "NavDropdown";
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  position: relative;\n  user-select: none;\n  width: 100%;\n"])));
var StyledDropdown = styled(Dropdown)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  position: initial;\n\n  .dropdown--active {\n    background-color: rgb(37, 51, 66);\n\n    .dropdown--caret {\n      color: ", ";\n    }\n  }\n\n  .dropdown--toggle {\n    display: block;\n    line-height: 60px;\n    padding: 0 0.5rem;\n\n    &:hover .dropdown--caret {\n      color: ", ";\n    }\n  }\n\n  .dropdown--menu {\n    background-color: rgb(37, 51, 66);\n    border: initial;\n    border-radius: 0;\n    margin: 0;\n    padding: 0;\n    position: initial;\n    top: 3.7rem;\n    width: 100%;\n    ", "\n  }\n\n  .dropdown--link {\n    color: #fff;\n    padding: 0.75rem;\n    text-shadow: 0 0 1px transparent;\n    vertical-align: baseline;\n\n    &:hover {\n      background-color: #33475b;\n    }\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.primary;
}, MEDIA_QUERY.desktop(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      min-width: 11rem;\n      position: absolute;\n    "]))));
var StyledContent = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0 0.25rem;\n"])));
NavDropdown.propTypes = {
  closeMenu: func,
  icon: string,
  name: string.isRequired,
  position: string,
  prefix: string,
  type: object.isRequired
};
NavDropdown.defaultProps = {
  position: 'left',
  prefix: 'fas'
};
//# sourceMappingURL=dropdown.js.map