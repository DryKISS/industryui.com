/**
 * Touch
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaTouch = function MetaTouch(_ref) {
  var verification = _ref.verification;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-startup-image",
    media: "(device-width: 768px) and (orientation: portrait)",
    href: "/assets/images/site/logo/splash-screen.jpg"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-icon",
    media: "(device-width: 768px) and (orientation: portrait)",
    href: "/assets/images/site/touch/icon-72@2x.png",
    sizes: "144x144"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "144x144",
    href: "../img/libs/touch/apple-touch-icon-144x144-precomposed.png"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "114x114",
    href: "../img/libs/touch/apple-touch-icon-114x114-precomposed.png"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "72x72",
    href: "../img/libs/touch/apple-touch-icon-72x72-precomposed.png"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    href: "../img/libs/touch/apple-touch-icon-57x57-precomposed.png"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "shortcut icon",
    href: "../img/libs/touch/apple-touch-icon.png"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "msapplication-TileImage",
    content: "../img/libs/touch/apple-touch-icon-144x144-precomposed.png"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#222222"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "icon",
    href: "images/touch/chrome-touch-icon-192x192.png",
    sizes: "192x192"
  }));
};
MetaTouch.displayName = "MetaTouch";
MetaTouch.propTypes = {
  verification: string.isRequired
};
//# sourceMappingURL=icon-touch.js.map