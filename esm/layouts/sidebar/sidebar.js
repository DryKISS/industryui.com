/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */
// React
import React, { useContext } from 'react';
import { array, func, node, string } from 'prop-types'; // UI

import { Bootstrap, ConfigContext, Container, Column, Row } from '../../';
export var SidebarLayout = function SidebarLayout(_ref) {
  var brand = _ref.brand,
      children = _ref.children,
      copyright = _ref.copyright,
      footer = _ref.footer,
      Navigation = _ref.Navigation;

  var _useContext = useContext(ConfigContext),
      Sidebar = _useContext.Sidebar;

  return /*#__PURE__*/React.createElement(Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    md: 2
  }, /*#__PURE__*/React.createElement(Sidebar, null)), /*#__PURE__*/React.createElement(Column, {
    md: 10,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Bootstrap, {
    brand: brand,
    copyright: copyright,
    footer: footer,
    Navigation: Navigation
  }, children))));
};
SidebarLayout.displayName = "SidebarLayout";
SidebarLayout.propTypes = {
  brand: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  Navigation: func
};
//# sourceMappingURL=sidebar.js.map