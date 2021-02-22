import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Blog - Recent
 * Creates a module to showcase five of the most recent blog articles.
 *
 * Select
 * - Not terms
 * - Not homepage false
 */
// React
import React, { useEffect, useState } from 'react';
import { array, number, object } from 'prop-types'; // UI

import { formatIntDateShort } from '../../';
import { BlogList, BlogSection } from './components';
export var BlogRecent = function BlogRecent(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      total = _ref.total;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  useEffect(function () {
    setList(_find());
  }, []);

  var _find = function _find() {
    return articles.filter(function (article) {
      return article.category !== 'terms' && article.homepage !== false;
    }).sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, total).map(function (opt) {
      return {
        badge: formatIntDateShort(new Date(opt.date)),
        category: opt.category,
        name: opt.heading,
        to: opt.slug
      };
    });
  };

  return /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Recent"
  }, /*#__PURE__*/React.createElement(BlogList, {
    config: config,
    list: list
  }));
};
BlogRecent.displayName = "BlogRecent";
BlogRecent.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  total: number
};
BlogRecent.defaultProps = {
  total: 5
};
//# sourceMappingURL=recent.js.map