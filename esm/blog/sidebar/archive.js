import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Blog - Archive
 * Lists the years and total number of blogs in that year
 *
 * - Group the articles by the year they were written
 * - Link to the archive/yyyy page
 */
// React
import React, { useEffect, useState } from 'react';
import { array, number, object } from 'prop-types'; // UI

import { formatIntDateYear } from '../../';
import { BlogList, BlogSection } from './components';
export var BlogArchive = function BlogArchive(_ref) {
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
      var year = formatIntDateYear(new Date(c.date));

      if (!Object.prototype.hasOwnProperty.call(p, year)) {
        p[year] = 0;
      }

      p[year]++;
      return p;
    }, {});
    var countsMapped = Object.keys(counts).map(function (k) {
      return {
        badge: k,
        name: counts[k],
        to: "archive/".concat(k)
      };
    }).reverse();
    return countsMapped;
  };

  return /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Archive"
  }, /*#__PURE__*/React.createElement(BlogList, {
    config: config,
    list: list
  }));
};
BlogArchive.displayName = "BlogArchive";
BlogArchive.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  total: number
};
BlogArchive.defaultProps = {
  total: 5
};
//# sourceMappingURL=archive.js.map