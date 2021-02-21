import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Blog - Sidebar
 * Showcases the Find Food, Social, Recent, Tags and Archive
 * The News room replaces the Find food with a search
 */
// React
import React from 'react';
import { array, bool, object } from 'prop-types';
import { BlogArchive, BlogAuthor, BlogFindFood, BlogMedia, BlogPromo, BlogRecent, BlogSocial, BlogTagCloud } from '../../'; // Style

import styled from 'styled-components';
export var BlogSidebar = function BlogSidebar(_ref) {
  var articles = _ref.articles,
      config = _ref.config,
      facebook = _ref.facebook,
      findFood = _ref.findFood,
      media = _ref.media,
      promo = _ref.promo,
      tags = _ref.tags;
  return /*#__PURE__*/React.createElement(StyledAside, null, findFood && /*#__PURE__*/React.createElement(BlogFindFood, null), media && /*#__PURE__*/React.createElement(BlogMedia, {
    media: media
  }), /*#__PURE__*/React.createElement(BlogSocial, {
    facebook: facebook
  }), promo && /*#__PURE__*/React.createElement(BlogPromo, {
    src: promo.src,
    to: promo.to
  }), /*#__PURE__*/React.createElement(BlogRecent, {
    articles: articles,
    config: config
  }), tags && /*#__PURE__*/React.createElement(BlogTagCloud, {
    articles: articles
  }), /*#__PURE__*/React.createElement(BlogArchive, {
    articles: articles,
    config: config
  }), /*#__PURE__*/React.createElement(BlogAuthor, {
    articles: articles,
    config: config
  }));
};
BlogSidebar.displayName = "BlogSidebar";
var StyledAside = styled.aside(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-left: 1px solid #797878;\n  height: 100%;\n  padding-left: 10px;\n"])));
BlogSidebar.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  facebook: object,
  findFood: bool,
  media: array,
  promo: array,
  tags: array
};
BlogSidebar.defaultProps = {
  findFood: false
};
//# sourceMappingURL=sidebar.js.map