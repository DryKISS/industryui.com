import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Components - Molecules - Navbar - Components - Toggler
 */
// React
import React from 'react';
import { bool, func } from 'prop-types'; // UI

import { Icon } from '../../../atoms/icon/icon/icon';
import { MEDIA_QUERY } from '../../../utils/mediaQueries'; // Style

import styled from 'styled-components';
export var Toggler = function Toggler(_ref) {
  var handleMenuClick = _ref.handleMenuClick,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(StyledToggler, {
    "aria-expanded": visible ? 'false' : 'true',
    "aria-label": "Toggle navigation",
    onClick: handleMenuClick
  }, !visible ? /*#__PURE__*/React.createElement(Icon, {
    icon: "bars",
    prefix: "fas"
  }) : /*#__PURE__*/React.createElement(Icon, {
    icon: "times",
    prefix: "fas"
  }), /*#__PURE__*/React.createElement(StyledText, null, "Menu"));
};
Toggler.displayName = "Toggler";
var StyledToggler = styled.a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  padding: ", ";\n  &:hover {\n    color: ", ";\n  }\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourToggler;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.fontSizeToggler;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.NAVBAR.paddingToggler;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.NAVBAR.colourHoverToggler;
}, MEDIA_QUERY.desktop(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: none;\n  "]))));
var StyledText = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-left: 0.25rem;\n"])));
Toggler.propTypes = {
  handleMenuClick: func.isRequired,
  visible: bool
};
Toggler.defaultProps = {
  visible: true
};
//# sourceMappingURL=toggler.js.map