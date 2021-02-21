/**
 * Core
 */
// React
import React from 'react';
import { string } from 'prop-types';
export var Core = function Core(_ref) {
  var author = _ref.author,
      canonical = _ref.canonical,
      description = _ref.description,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("title", {
    className: "next-head"
  }, title, " - ", author), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: description,
    key: "description"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "author",
    content: author,
    key: "author"
  }), /*#__PURE__*/React.createElement("meta", {
    rel: "canonical",
    href: canonical,
    key: "canonical"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    key: "viewport"
  }), /*#__PURE__*/React.createElement("meta", {
    charSet: "UTF-8",
    key: "charset"
  }), /*#__PURE__*/React.createElement("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    key: "edge"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "format-detection",
    content: "telephone=no",
    key: "format"
  }));
};
Core.propTypes = {
  author: string,
  canonical: string.isRequired,
  description: string.isRequired,
  title: string.isRequired
};
Core.defaultProps = {
  author: 'DryKISS'
};
//# sourceMappingURL=core.js.map