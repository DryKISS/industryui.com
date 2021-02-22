/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */
// React
import React from 'react';
import { array, bool, func, node, object } from 'prop-types'; // UI

import { Copyright, Footer } from '../../';
export var Bootstrap = function Bootstrap(_ref) {
  var children = _ref.children,
      copyright = _ref.copyright,
      footer = _ref.footer,
      fixed = _ref.fixed,
      icon = _ref.icon,
      Navigation = _ref.Navigation;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navigation, null), children, footer && /*#__PURE__*/React.createElement(Footer, {
    columns: footer,
    fixed: fixed
  }), copyright && /*#__PURE__*/React.createElement(Copyright, {
    icon: icon,
    links: copyright
  }));
};
Bootstrap.propTypes = {
  children: node.isRequired,
  copyright: array,
  fixed: bool,
  footer: array,
  icon: object,
  Navigation: func
};
Bootstrap.defaultProps = {
  fixed: false
};
//# sourceMappingURL=bootstrap.js.map