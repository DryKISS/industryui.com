import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var _templateObject;

/**
 * Blog - Categories
 * Displays two article cards from each category.
 *
 * - Only shows if homepage is not false
 * - Sorted and filtered by date.
 */
// React
import React, { Fragment } from 'react';
import { any, object } from 'prop-types'; // UI

import { BlogCard, Column, Heading, Link, Row, slugify } from '../../'; // Style

import styled from 'styled-components';
export var BlogCategories = function BlogCategories(_ref) {
  var articles = _ref.articles,
      config = _ref.config;

  var _uniqueCategories = function _uniqueCategories() {
    var uniqueCategories = _toConsumableArray(new Set(articles.map(function (article) {
      return article.category;
    })));

    return uniqueCategories;
  };

  var _find = function _find() {
    var categories = _uniqueCategories();

    return categories.map(function (category) {
      return articles.filter(function (article) {
        return article.category === category && article.homepage !== false;
      }).sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      }).slice(0, 2);
    });
  };

  return /*#__PURE__*/React.createElement("section", null, _find().map(function (articles, index) {
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(Link, {
      to: {
        as: "".concat(config.path, "/").concat(slugify(articles[0].category)),
        href: {
          pathname: "".concat(config.path, "/category"),
          query: {
            category: slugify(articles[0].category)
          }
        }
      }
    }, /*#__PURE__*/React.createElement(StyledHeading, {
      content: articles[0].category,
      tag: "h2"
    })), /*#__PURE__*/React.createElement(Row, null, articles.map(function (article, index) {
      return /*#__PURE__*/React.createElement(Column, {
        key: index,
        md: 6
      }, /*#__PURE__*/React.createElement(BlogCard, {
        article: article,
        config: config
      }));
    })));
  }));
};
BlogCategories.displayName = "BlogCategories";
var StyledHeading = styled(Heading)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  margin-top: 2rem;\n  text-align: center;\n\n  &:hover {\n    color: #00ccbc;\n  }\n"])));
BlogCategories.propTypes = {
  articles: any.isRequired,
  config: object.isRequired
};
//# sourceMappingURL=categories.js.map