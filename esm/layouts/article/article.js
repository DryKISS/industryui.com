/**
 * Article template
 * Provides the base template to showcase an Article
 */
// React
import React from 'react'; // Config
// import { BRAND } from 'config'
// UI

import { Article, Column, Container // MetaHead,
, Row } from '../../'; // import { BlogSidebar } from './components'

export var ArticleLayout = function ArticleLayout(_ref) {
  var children = _ref.children,
      frontMatter = _ref.frontMatter;
  // const meta = {
  //   canonical: `blog/${frontMatter.slug}`,
  //   description: frontMatter.description,
  //   title: frontMatter.title
  // }
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    md: 12
  }, /*#__PURE__*/React.createElement(Article, {
    article: frontMatter
  }))));
};
ArticleLayout.displayName = "ArticleLayout";
//# sourceMappingURL=article.js.map