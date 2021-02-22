import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components -  Blog - Details
 */
// React
import React from 'react';
import { object } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { BlogCategory } from '../category/category';
import { BlogReadTime } from '../readTime/readTime';
import { BlogTags, Divider, FacebookShareButton, Icon, List, ListItem, slugify } from '../../';
import { Date } from '../../atoms/date/date';
export var BlogDetails = function BlogDetails(_ref) {
  var article = _ref.article,
      config = _ref.config,
      facebook = _ref.facebook;
  return /*#__PURE__*/React.createElement(StyledArticleDetails, null, /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  }), /*#__PURE__*/React.createElement(List, {
    inline: true,
    unstyled: true,
    style: {
      marginTop: '.25rem'
    }
  }, /*#__PURE__*/React.createElement(ListItem, {
    style: {
      marginRight: '1rem'
    }
  }, /*#__PURE__*/React.createElement(StyledIcon, {
    context: "dark",
    icon: "calendar-alt"
  }), /*#__PURE__*/React.createElement(Date, {
    date: article.date,
    size: "sm"
  })), /*#__PURE__*/React.createElement(ListItem, {
    style: {
      marginRight: '1rem'
    }
  }, /*#__PURE__*/React.createElement(StyledIcon, {
    context: "dark",
    icon: "user"
  }), /*#__PURE__*/React.createElement(BlogCategory, {
    author: true,
    config: config,
    to: article.author
  })), /*#__PURE__*/React.createElement(ListItem, {
    style: {
      marginRight: '1rem'
    }
  }, /*#__PURE__*/React.createElement(StyledIcon, {
    context: "dark",
    icon: "stopwatch"
  }), /*#__PURE__*/React.createElement(BlogReadTime, {
    time: article.readtime
  }))), article.tags && /*#__PURE__*/React.createElement(BlogTags, {
    tags: article.tags
  }), /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  }), /*#__PURE__*/React.createElement(StyledShare, null, /*#__PURE__*/React.createElement(StyledShareText, null, "Share this article"), /*#__PURE__*/React.createElement(FacebookShareButton, {
    appId: facebook.appId,
    hashTag: facebook.hashTag,
    iFrame: true,
    to: "".concat(facebook.domain).concat(config.path, "/").concat(slugify(article.category), "/").concat(article.slug)
  })), /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  }));
};
BlogDetails.displayName = "BlogDetails";
var StyledArticleDetails = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 0.875rem;\n"])));
var StyledIcon = styled(Icon)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-right: 0.25rem;\n"])));
var StyledShare = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var StyledShareText = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"]))); // const StyledShareLink = styled.a`
//   color: #00ccbc;
//   font-size: 2rem;
//   line-height: 1rem;
//   margin-right: .5rem;
//   text-decoration: none;
// `

BlogDetails.propTypes = {
  article: object.isRequired,
  config: object.isRequired,
  facebook: object
};
//# sourceMappingURL=details.js.map