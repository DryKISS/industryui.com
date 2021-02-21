import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Blog - Author
 * List the 5 Authors who have written the most
 */
// React
import React, { useEffect, useState } from 'react';
import { array, number, object } from 'prop-types'; // UI

import { slugify } from '../../';
import { BlogList, BlogSection } from './components';
export var BlogAuthor = function BlogAuthor(_ref) {
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
    var counts = articles.filter(function (article) {
      return article.category !== 'terms' && article.homepage !== false;
    }).reduce(function (p, c) {
      var author = c.author;

      if (!Object.prototype.hasOwnProperty.call(p, author)) {
        p[author] = 0;
      }

      p[author]++;
      return p;
    }, {});
    var countsMapped = Object.keys(counts).filter(function (article, v) {
      return article !== 'undefined';
    }).map(function (k) {
      return {
        badge: k,
        name: counts[k],
        to: "".concat(slugify(k))
      };
    });
    return countsMapped;
  };

  return /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Author"
  }, /*#__PURE__*/React.createElement(BlogList, {
    config: config,
    author: true,
    list: list
  }));
};
BlogAuthor.displayName = "BlogAuthor";
BlogAuthor.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  total: number
};
BlogAuthor.defaultProps = {
  total: 5
};
//# sourceMappingURL=author.js.map