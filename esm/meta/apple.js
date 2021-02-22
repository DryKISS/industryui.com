/**
 * Apple
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaApple = function MetaApple(_ref) {
  var appleId = _ref.appleId,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    charset: "apple-itunes-app",
    content: appleId
  }), /*#__PURE__*/React.createElement("meta", {
    charset: "apple-mobile-web-app-capable",
    content: "yes"
  }), /*#__PURE__*/React.createElement("meta", {
    charset: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), /*#__PURE__*/React.createElement("meta", {
    charset: "apple-mobile-web-app-title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    charset: "format-detection",
    content: "telephone=yes"
  }));
};
MetaApple.displayName = "MetaApple";
MetaApple.propTypes = {
  appleId: string.isRequired,
  title: string.isRequired
};
//# sourceMappingURL=apple.js.map