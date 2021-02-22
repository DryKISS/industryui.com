/**
 * Dublin
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaDublin = function MetaDublin(_ref) {
  var author = _ref.author,
      description = _ref.description,
      locale = _ref.locale,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    name: "dcterms.title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "dcterms.description",
    content: description
  }), /*#__PURE__*/React.createElement("meta", {
    name: "dcterms.publisher",
    content: author
  }), /*#__PURE__*/React.createElement("meta", {
    name: "dcterms.language",
    content: locale
  }), /*#__PURE__*/React.createElement("meta", {
    name: "dcterms.creator",
    content: author
  }));
};
MetaDublin.displayName = "MetaDublin";
MetaDublin.propTypes = {
  author: string.isRequired,
  description: string.isRequired,
  locale: string.isRequired,
  title: string.isRequired
};
//# sourceMappingURL=dublin.js.map