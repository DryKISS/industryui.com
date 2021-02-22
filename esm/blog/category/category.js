import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Blog - Category
 */
// React
import React from 'react';
import { any, bool, object, oneOfType, shape, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { Link, slugify } from '../../';
export var BlogCategory = function BlogCategory(_ref) {
  var author = _ref.author,
      config = _ref.config,
      className = _ref.className,
      style = _ref.style,
      to = _ref.to;
  var path = slugify(to);
  return /*#__PURE__*/React.createElement(StyledCategory, {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Link, {
    passHref: true,
    to: {
      as: "".concat(config.path, "/").concat(path),
      href: {
        pathname: author ? "".concat(config.path, "/author") : "".concat(config.path, "/category"),
        query: {
          author: path,
          category: path
        }
      }
    }
  }, path.toUpperCase().replace('-', ' ')));
};
BlogCategory.displayName = "BlogCategory";
var StyledCategory = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline;\n  font-size: 12px;\n  margin-bottom: 5px;\n  position: relative;\n  z-index: 2;\n"])));
BlogCategory.propTypes = {
  author: bool,
  className: any,
  config: object.isRequired,
  style: any,
  to: shape({
    passHref: bool,
    prefetch: bool,
    to: oneOfType([object, string]).isRequired
  })
};
//# sourceMappingURL=category.js.map