import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Blog - List
 */
// React
import React, { Fragment } from 'react';
import { array, bool, object } from 'prop-types'; // UI

import { Badge, Link, slugify, Truncate } from '../../../'; // Style

import styled from 'styled-components';
export var BlogList = function BlogList(_ref) {
  var author = _ref.author,
      config = _ref.config,
      list = _ref.list;
  return /*#__PURE__*/React.createElement(StyledDl, null, list.map(function (_ref2, index) {
    var badge = _ref2.badge,
        _ref2$category = _ref2.category,
        category = _ref2$category === void 0 ? '' : _ref2$category,
        name = _ref2.name,
        to = _ref2.to;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(StyledDt, null, /*#__PURE__*/React.createElement(Badge, {
      content: badge
    })), /*#__PURE__*/React.createElement(StyledDd, null, /*#__PURE__*/React.createElement(Link, {
      to: {
        as: "".concat(config.path, "/").concat(category && slugify(category) + '/').concat(slugify(to)),
        href: {
          pathname: author ? "".concat(config.path, "/author") : "".concat(config.path, "/article"),
          query: {
            articleSlug: slugify(to),
            author: slugify(to),
            category: category && slugify(category)
          }
        }
      },
      passHref: true
    }, /*#__PURE__*/React.createElement(StyledA, null, name))));
  }));
};
BlogList.displayName = "BlogList";
var StyledDl = styled.dl(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px;\n"])));
var StyledDt = styled.dt(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 0 0 25%;\n  max-width: 25%;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding: 0 1rem;\n"])));
var StyledDd = styled.dd(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 0 0 75%;\n  max-width: 75%;\n  position: relative;\n  margin-left: 0;\n  min-height: 1px;\n  padding: 0.2rem 1rem 0 1rem;\n  width: 100%;\n"])));
var StyledA = styled.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  return Truncate('100px');
});
BlogList.propTypes = {
  author: bool,
  config: object.isRequired,
  list: array.isRequired
};
BlogList.defaultProps = {
  author: false
};
//# sourceMappingURL=list.js.map