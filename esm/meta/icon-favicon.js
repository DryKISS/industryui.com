/**
 * Favicon
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaFavicon = function MetaFavicon(_ref) {
  var verification = _ref.verification;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("link", {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/ico"
  }));
};
MetaFavicon.displayName = "MetaFavicon";
MetaFavicon.propTypes = {
  verification: string.isRequired
};
//# sourceMappingURL=icon-favicon.js.map