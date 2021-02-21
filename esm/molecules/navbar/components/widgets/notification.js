import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Navbar - Widget - Notifications
 */
// React
import React from 'react';
import { bool, func, object, string } from 'prop-types'; // UI

import { Link, Icon } from '../../../../'; // Style

import styled from 'styled-components';
export var NavNotification = function NavNotification(_ref) {
  var closeMenu = _ref.closeMenu,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;

  var handleClick = function handleClick() {
    visible && closeMenu();
  };

  var link = function link() {
    return /*#__PURE__*/React.createElement(Link, {
      border: false,
      onClick: handleClick,
      passHref: true,
      to: to
    }, /*#__PURE__*/React.createElement(Notification, null));
  };

  var Notification = function Notification() {
    return /*#__PURE__*/React.createElement(StyledNotifications, null, type && !!type.count && /*#__PURE__*/React.createElement(StyledCount, null, type.count), /*#__PURE__*/React.createElement(Icon, {
      icon: "bell"
    }));
  };

  if (to) {
    return link();
  } else {
    return /*#__PURE__*/React.createElement(Notification, null);
  }
};
var StyledNotifications = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  display: inline-block;\n  margin-right: 0.5rem;\n  padding: 1rem 0.75rem;\n  position: relative;\n  width: 100%;\n\n  &:hover {\n    color: ", ";\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.NAVBAR.colourActive;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.NAVBAR.colourActive;
});
var StyledCount = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: red;\n  border: 1px solid #fff;\n  border-radius: 0.5rem;\n  color: #fff;\n  font-size: 0.75rem;\n  left: 50%;\n  line-height: 1;\n  padding: 2px 5px;\n  position: absolute;\n  text-align: center;\n  top: 0.4rem;\n  user-select: none;\n"])));
NavNotification.propTypes = {
  closeMenu: func,
  to: string.isRequired,
  type: object,
  visible: bool
};
//# sourceMappingURL=notification.js.map