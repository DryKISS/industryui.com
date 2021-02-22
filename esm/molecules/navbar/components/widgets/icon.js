/**
 * Navbar - Widgets - Icon
 */
// React
import React from 'react';
import { bool, string, func } from 'prop-types'; // UI

import { Icon, Link } from '../../../../';
export var NavIcon = function NavIcon(_ref) {
  var closeMenu = _ref.closeMenu,
      to = _ref.to,
      type = _ref.type,
      visible = _ref.visible;
  return /*#__PURE__*/React.createElement(Link, {
    to: to,
    onClick: visible && closeMenu
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: type.icon
  }));
};
NavIcon.displayName = "NavIcon";
NavIcon.propTypes = {
  closeMenu: func,
  to: string.isRequired,
  type: string.isRequired,
  visible: bool
};
NavIcon.defaultProps = {
  visible: false
};
//# sourceMappingURL=icon.js.map