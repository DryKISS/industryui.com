/**
 * Facebook
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaFacebook = function MetaFacebook(_ref) {
  var appId = _ref.appId,
      brand = _ref.brand,
      description = _ref.description,
      image = _ref.image,
      locale = _ref.locale,
      title = _ref.title,
      type = _ref.type,
      url = _ref.url;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    content: title,
    property: "og:title"
  }), /*#__PURE__*/React.createElement("meta", {
    content: description,
    name: "description",
    property: "og:description"
  }), /*#__PURE__*/React.createElement("meta", {
    content: "".concat(url).concat(image),
    property: "og:image"
  }), /*#__PURE__*/React.createElement("meta", {
    content: brand,
    property: "og:site_name"
  }), /*#__PURE__*/React.createElement("meta", {
    content: type,
    property: "og:type"
  }), /*#__PURE__*/React.createElement("meta", {
    content: url,
    property: "og:url"
  }), /*#__PURE__*/React.createElement("meta", {
    content: locale,
    property: "og:locale"
  }), /*#__PURE__*/React.createElement("meta", {
    content: appId,
    property: "fb:app_id"
  }));
};
MetaFacebook.displayName = "MetaFacebook";
MetaFacebook.propTypes = {
  appId: string.isRequired,
  description: string.isRequired,
  locale: string.isRequired,
  title: string.isRequired
};
//# sourceMappingURL=facebook.js.map