/**
 * Mobile
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaMobile = function MetaMobile(_ref) {
  var verification = _ref.verification;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "mobile-web-app-capable",
    content: "yes"
  }));
};
MetaMobile.displayName = "MetaMobile";
MetaMobile.propTypes = {
  verification: string.isRequired
};
//# sourceMappingURL=mobile.js.map