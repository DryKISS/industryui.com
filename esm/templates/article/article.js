import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Article
 * Template to showcase a Blog article
 */
// React
import React from 'react';
import { object, string } from 'prop-types'; // UI

import { BlogCategory, BlogDetails, Breadcrumb, Heading, Image } from '../../'; // Style

import styled from 'styled-components';
export var Article = function Article(_ref) {
  var article = _ref.article,
      className = _ref.className,
      config = _ref.config,
      facebook = _ref.facebook,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledArticle, {
    className: className,
    itemProp: "blogPost",
    itemScope: true,
    itemType: "http://schema.org/BlogPosting",
    role: "article",
    style: style
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement(StyledImage, {
    alt: article.heading,
    src: article.image || "/static/blog/".concat(article.slug, "/hero.jpg")
  }), article.category && /*#__PURE__*/React.createElement(Breadcrumb, {
    category: article.category,
    page: article.title,
    path: article.category
  }), config && article.category && /*#__PURE__*/React.createElement(BlogCategory, {
    config: config,
    to: article.category
  }), /*#__PURE__*/React.createElement(StyledHeading, {
    content: article.heading
  }), facebook && /*#__PURE__*/React.createElement(BlogDetails, {
    article: article,
    config: config,
    facebook: facebook
  })), /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: article.data
    }
  }));
};
Article.displayName = "Article";
var StyledArticle = styled.article(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 750px;\n  margin: 0 auto;\n  position: relative;\n\n  .article--instagram {\n    display: grid;\n    justify-items: center;\n  }\n"])));
var StyledImage = styled(Image)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
var StyledHeading = styled(Heading)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n"])));
Article.propTypes = {
  article: object.isRequired,
  className: string,
  config: object,
  facebook: object,
  style: object
};
//# sourceMappingURL=article.js.map