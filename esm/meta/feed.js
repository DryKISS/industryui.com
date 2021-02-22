/**
 * Feed
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaFeed = function MetaFeed(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("link", {
    rel: "alternate",
    type: "application/atom+xml",
    href: "feed.xml",
    title: title
  }), /*#__PURE__*/React.createElement("link", {
    rel: "alternate",
    type: "application/rss+xml",
    href: "feed.xml",
    title: title
  }));
};
MetaFeed.displayName = "MetaFeed";
MetaFeed.propTypes = {
  title: string.isRequired
};
//# sourceMappingURL=feed.js.map