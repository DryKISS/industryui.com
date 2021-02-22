import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

/**
 * Components - Molecules - Breadcrumb
 */
// React
import React from 'react';
import { array, node, oneOf, oneOfType, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { Icon } from '../../atoms/icon/icon/icon';
import { Link } from '../../atoms/link/link';
import { THEME_SIZE } from '../../theme/constants/size';
export var Breadcrumb = function Breadcrumb(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      customSeparator = _ref.customSeparator,
      separator = _ref.separator,
      size = _ref.size;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/React.createElement(StyledOl, {
    itemScope: "",
    itemType: "http://schema.org/BreadcrumbList"
  }, breadcrumbs.map(function (item, index) {
    return /*#__PURE__*/React.createElement(StyledLi, {
      itemProp: "itemListElement",
      itemScope: "",
      itemType: "http://schema.org/ListItem",
      key: index
    }, index + 1 !== breadcrumbs.length ? /*#__PURE__*/React.createElement(Link, {
      to: item.to,
      passHref: true
    }, /*#__PURE__*/React.createElement(StyledA, {
      itemProp: "item",
      itemScope: "itemscope",
      size: size,
      itemType: "http://schema.org/Thing"
    }, item.icon && /*#__PURE__*/React.createElement(StyledIconWrapper, {
      size: size
    }, item.icon), /*#__PURE__*/React.createElement(StyledTitle, {
      size: size
    }, " ", item.title))) : /*#__PURE__*/React.createElement(StyledLastTitle, {
      size: size,
      itemProp: "name"
    }, item.icon && /*#__PURE__*/React.createElement(StyledIconWrapper, {
      size: size
    }, item.icon), /*#__PURE__*/React.createElement(StyledTitle, {
      last: true,
      size: size
    }, item.title)), /*#__PURE__*/React.createElement("meta", {
      itemProp: "position",
      content: index + 1 + ''
    }), index + 1 !== breadcrumbs.length && /*#__PURE__*/React.createElement(StyledSeperator, {
      size: size
    }, customSeparator !== null && customSeparator !== void 0 ? customSeparator : separator && separator === 'chevron' ? /*#__PURE__*/React.createElement(StyledIcon, {
      icon: "chevron-right",
      prefix: "fas"
    }) : separator && separator === 'slash' ? /*#__PURE__*/React.createElement(StyledIcon, {
      icon: "slash",
      prefix: "fas"
    }) : separator || '\\'));
  })));
};
Breadcrumb.displayName = "Breadcrumb";

var sizedStyles = function sizedStyles(size) {
  switch (size) {
    case THEME_SIZE.XXS:
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        font-size: 0.625rem;\n        padding: 0 0.25rem;\n      "])));

    case THEME_SIZE.XS:
      return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        font-size: 0.75rem;\n        padding: 0 0.25rem;\n      "])));

    case THEME_SIZE.SM:
      return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        font-size: 0.875rem;\n        padding: 0 0.25rem;\n      "])));

    case THEME_SIZE.MD:
      return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        font-size: 1rem;\n        padding: 0 0.375rem;\n      "])));

    case THEME_SIZE.LG:
      return css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        font-size: 1.25rem;\n        padding: 0 0.375rem;\n      "])));

    case THEME_SIZE.XL:
      return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        font-size: 1.5rem;\n        padding: 0 0.375rem;\n      "])));

    case THEME_SIZE.XXL:
      return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        font-size: 2rem;\n        padding: 0 0.5rem;\n      "])));

    case THEME_SIZE.XXXL:
      return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        font-size: 3rem;\n        padding: 0 0.5rem;\n      "])));

    default:
      return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        font-size: 1.25rem;\n        padding: 0 0.375rem;\n      "])));
  }
};

var StyledTitle = styled.span(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n  ", "\n"])), function (_ref2) {
  var size = _ref2.size;
  return sizedStyles(size);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.link;
}, function (_ref4) {
  var last = _ref4.last,
      theme = _ref4.theme;
  return last && css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), theme.COLOUR.dark);
});
var StyledIconWrapper = styled.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n"])), function (_ref5) {
  var size = _ref5.size;
  return sizedStyles(size);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.COLOUR.blackGrey;
});
var StyledIcon = styled(Icon).attrs(function (props) {
  return {
    color: props.theme.dark
  };
})(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
var StyledSeperator = styled.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  color: ", ";\n  ", "\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.COLOUR.dark;
}, function (_ref8) {
  var size = _ref8.size;
  return sizedStyles(size);
});
var StyledA = styled.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([""])));
var StyledLastTitle = styled.span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref9) {
  var size = _ref9.size;
  return sizedStyles(size);
});
var StyledOl = styled.ol(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border-radius: 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n  width: 100%;\n"])));
var StyledLi = styled.li(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  a {\n    border: none !important;\n  }\n"])));
Breadcrumb.propTypes = {
  breadcrumbs: array,
  customSeparator: node,
  separator: oneOfType([oneOf(['chevron', 'slash']), string]),
  size: oneOf(Object.values(THEME_SIZE))
};
//# sourceMappingURL=breadcrumb.js.map