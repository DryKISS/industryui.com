/**
 * Components - Blog - Listing
 * Displays articles cards from selected author, category or tag
 *
 * - Published is true
 * - Homepage is not false
 * - Sorted and filtered by date
 */
// React
import React from 'react';
import { any, string, object } from 'prop-types'; // Lodash

import _filter from 'lodash/filter'; // UI

import { BlogCard } from '../card/card';
import { Column, Row, slugify } from '../../';
export var BlogListing = function BlogListing(_ref) {
  var articles = _ref.articles,
      author = _ref.author,
      category = _ref.category,
      config = _ref.config,
      tag = _ref.tag;

  var _findTag = function _findTag(articles) {
    return _filter(articles, {
      tags: [tag]
    });
  };

  var _findArticle = function _findArticle(articles) {
    return articles.filter(function (article) {
      return slugify(category ? article.category : article.author) === (category || author) && article.homepage !== false && article.published;
    });
  };

  var _find = function _find() {
    var _findMe = articles;

    if (tag) {
      _findMe = _findTag(articles);
    }

    if (category) {
      _findMe = _findArticle(articles);
    }

    return _findMe.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, 10);
  };

  return /*#__PURE__*/React.createElement(Row, null, "here", _find().map(function (article, index) {
    return /*#__PURE__*/React.createElement(Column, {
      key: index,
      md: 6
    }, /*#__PURE__*/React.createElement(BlogCard, {
      article: article,
      config: config
    }));
  }));
};
BlogListing.displayName = "BlogListing";
BlogListing.propTypes = {
  articles: any.isRequired,
  author: string,
  category: string,
  config: object,
  tag: string
};
//# sourceMappingURL=listing.js.map