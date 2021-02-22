/**
 * Twitter
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaTwitter = function MetaTwitter(_ref) {
  var account = _ref.account,
      description = _ref.description,
      image = _ref.image,
      title = _ref.title,
      url = _ref.url;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    name: "twitter:site",
    content: account
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:creator",
    content: account
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:image",
    content: "".concat(url).concat(image)
  }), /*#__PURE__*/React.createElement("meta", {
    content: url,
    property: "twitter:domain"
  }), ' ', "*/}");
};
MetaTwitter.displayName = "MetaTwitter";
MetaTwitter.propTypes = {
  account: string.isRequired
};
//# sourceMappingURL=twitter.js.map