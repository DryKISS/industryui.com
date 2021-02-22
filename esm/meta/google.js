/**
 * Google
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaGoogle = function MetaGoogle(_ref) {
  var verification = _ref.verification;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    name: "google-site-verification",
    content: verification
  }));
};
MetaGoogle.displayName = "MetaGoogle";
MetaGoogle.propTypes = {
  verification: string.isRequired
};
//# sourceMappingURL=google.js.map