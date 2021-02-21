/**
 * Blog - Hero
 * Gets the latest Hero article(s)
 *
 * Select Hero
 * - Exclude terms category
 * - Exclude homepage=false
 *
 * (a.data.hero === true || a.data.hero === 'true') and a.data.category
 * != 'terms' and (a.data.homepage != false || a.data.homepage != 'false')
 */
// React
import React from 'react';
import { any, number, object } from 'prop-types'; // UI

import { BlogCard, Column, Row } from '../../';
export var BlogHero = function BlogHero(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      number = _ref.number;

  var _find = function _find() {
    return articles.find(function (article) {
      return article.hero === true;
    });
  };

  var renderHero = function renderHero() {
    var article = _find();

    return /*#__PURE__*/React.createElement(Column, {
      md: 12 / number
    }, /*#__PURE__*/React.createElement(BlogCard, {
      article: article,
      config: config,
      type: "hero"
    }));
  };

  return /*#__PURE__*/React.createElement(Row, null, renderHero());
};
BlogHero.displayName = "BlogHero";
BlogHero.propTypes = {
  articles: any.isRequired,
  config: object.isRequired,
  number: number
};
BlogHero.defaultProps = {
  number: 1
};
//# sourceMappingURL=hero.js.map