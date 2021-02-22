import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Blog - Card
 */
// React
import React from 'react';
import { any, bool, object, oneOf, shape } from 'prop-types'; // UI

import { BlogCategory, BlogTags, Button, Card, CardImage, Divider, Link, slugify } from '../../';
import { CardBody } from '../../molecules/card/components/body';
import { Heading } from '../../atoms/heading/heading'; // Style

import styled, { css } from 'styled-components';
export var BlogCard = function BlogCard(_ref) {
  var article = _ref.article,
      config = _ref.config,
      link = _ref.link,
      type = _ref.type;
  var author = article.author,
      category = article.category,
      excerpt = article.excerpt,
      heading = article.heading,
      slug = article.slug;
  var articleSlug = slugify(article.slug);
  var categorySlug = category ? slugify(category) : null;
  var articleLink = {
    as: (article === null || article === void 0 ? void 0 : article.linkAs) || "".concat(config.path, "/").concat(categorySlug, "/").concat(articleSlug),
    href: (article === null || article === void 0 ? void 0 : article.linkHref) || "".concat(config.path, "/[categoryId]/[articleId]")
  };
  return /*#__PURE__*/React.createElement("article", {
    role: "article",
    itemProp: "blogPost",
    itemScope: true,
    itemType: "http://schema.org/BlogPosting"
  }, /*#__PURE__*/React.createElement(Card, {
    shadow: true
  }, /*#__PURE__*/React.createElement(Link, _extends({
    to: articleLink
  }, link), /*#__PURE__*/React.createElement(CardImage, {
    alt: heading,
    src: (article === null || article === void 0 ? void 0 : article.image) || "/static/blog/".concat(slug, "/hero.jpg?v=1.00")
  })), /*#__PURE__*/React.createElement(StyledCardBody, {
    type: type
  }, type === 'normal' && category && /*#__PURE__*/React.createElement(BlogCategory, {
    config: config,
    link: _objectSpread({
      to: category
    }, link),
    type: type
  }), /*#__PURE__*/React.createElement(StyledContent, {
    type: type
  }, /*#__PURE__*/React.createElement(Link, _extends({
    to: articleLink
  }, link), /*#__PURE__*/React.createElement(StyledHeading, {
    content: heading,
    tag: "h1",
    noWrap: true,
    type: type
  })), type === 'normal' && /*#__PURE__*/React.createElement("p", {
    itemProp: "description"
  }, excerpt)), type === 'normal' && /*#__PURE__*/React.createElement(React.Fragment, null, article.tags && /*#__PURE__*/React.createElement(TagsContainer, null, /*#__PURE__*/React.createElement(BlogTags, {
    tags: article.tags
  })), /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  }), author && /*#__PURE__*/React.createElement(BlogCategory, {
    author: true,
    link: _objectSpread({
      to: author
    }, link),
    config: config,
    type: type
  }), article.readtime && /*#__PURE__*/React.createElement(StyledReadTime, null, article.readtime, "min read time.")), /*#__PURE__*/React.createElement(Link, _extends({
    to: articleLink
  }, link), /*#__PURE__*/React.createElement(StyledButton, {
    content: "Read more",
    context: type === 'normal' ? 'primary' : 'white',
    size: type === 'normal' ? 'sm' : 'lg',
    position: type
  })))));
};
BlogCard.displayName = "BlogCard";
var TagsContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 1.75rem;\n  margin-top: 0.25rem;\n  overflow: hidden;\n"])));
var StyledButton = styled(Button)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  bottom: 1.25rem;\n  position: absolute;\n  right: 1rem;\n  z-index: 2;\n  ", "\n"])), function (_ref2) {
  var position = _ref2.position;
  return position === 'hero' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      bottom: 1.25rem;\n    "])));
});
var StyledCardBody = styled(CardBody)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  min-height: 303px;\n  position: relative;\n  z-index: 0;\n  ", "\n"])), function (_ref3) {
  var COLOUR = _ref3.theme.COLOUR,
      type = _ref3.type;
  return type === 'hero' && css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      background-color: ", ";\n      min-height: 80px;\n      &:after {\n        background: ", ";\n        content: '';\n        display: block;\n        height: 120px;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        transform: skewy(6deg);\n        transform-origin: 100% 0;\n        z-index: -1;\n      }\n    "])), COLOUR.primary, COLOUR.primary);
});
var StyledContent = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 128px;\n  margin-bottom: 1rem;\n  overflow: hidden;\n  ", "\n"])), function (_ref4) {
  var type = _ref4.type;
  return type === 'hero' && css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      height: 122px;\n      margin-bottom: 0;\n    "])));
});
var StyledHeading = styled(Heading)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  color: #000;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  margin-bottom: 0;\n  max-width: 500px;\n  overflow: hidden;\n  position: relative;\n  z-index: 2;\n\n  &:hover {\n    color: ", ";\n  }\n\n  ", "\n"])), function (_ref5) {
  var type = _ref5.type,
      COLOUR = _ref5.theme.COLOUR;
  return type === 'hero' ? COLOUR.light : COLOUR.drykiss_lightBlue;
}, function (_ref6) {
  var type = _ref6.type;
  return type === 'hero' && css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      color: #fff;\n      font-size: 2rem;\n      line-height: 2rem;\n      max-height: 115px;\n    "])));
});
var StyledReadTime = styled.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 0.75rem;\n  margin: 0;\n"])));
BlogCard.propTypes = {
  article: any.isRequired,
  config: object.isRequired,
  link: shape({
    prefetch: bool
  }),
  type: oneOf(['hero', 'normal'])
};
BlogCard.defaultProps = {
  type: 'normal'
};
//# sourceMappingURL=card.js.map