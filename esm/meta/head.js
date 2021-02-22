/**
 * Head
 */
// React
import React from 'react';
import { object, string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaHead = function MetaHead(_ref) {
  var canonical = _ref.canonical,
      brand = _ref.brand,
      meta = _ref.meta;
  var description = meta.description,
      path = meta.path,
      title = meta.title;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("title", null, title, " | ", brand), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: description,
    key: "description"
  }), /*#__PURE__*/React.createElement("meta", {
    rel: "canonical",
    href: canonical + path,
    key: "canonical"
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:url",
    content: canonical + path
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:url",
    content: canonical + path
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: description
  }));
};
MetaHead.displayName = "MetaHead";
MetaHead.propTypes = {
  brand: string.isRequired,
  meta: object.isRequired
};
//# sourceMappingURL=head.js.map