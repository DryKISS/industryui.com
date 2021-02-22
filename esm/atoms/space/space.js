import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Space
 */
// React
import React from 'react';
import { node, oneOf, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { THEME_SIZE } from '../../theme/constants/size';
import { spaceStyler } from './style';
export var Space = function Space(_ref) {
  var children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      margin = _ref.margin,
      marginX = _ref.marginX,
      marginY = _ref.marginY,
      marginTop = _ref.marginTop,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      padding = _ref.padding,
      paddingX = _ref.paddingX,
      paddingY = _ref.paddingY,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft;
  return /*#__PURE__*/React.createElement(StyledSpace, {
    className: className,
    margin: margin,
    marginX: marginX,
    marginY: marginY,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    padding: padding,
    paddingX: paddingX,
    paddingY: paddingY,
    paddingTop: paddingTop,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft
  }, content || children);
};
Space.displayName = "Space";
var StyledSpace = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  ", "\n"])), function (_ref2) {
  var margin = _ref2.margin,
      marginBottom = _ref2.marginBottom,
      marginTop = _ref2.marginTop,
      marginLeft = _ref2.marginLeft,
      marginRight = _ref2.marginRight,
      marginX = _ref2.marginX,
      marginY = _ref2.marginY,
      padding = _ref2.padding,
      paddingBottom = _ref2.paddingBottom,
      paddingLeft = _ref2.paddingLeft,
      paddingRight = _ref2.paddingRight,
      paddingTop = _ref2.paddingTop,
      paddingX = _ref2.paddingX,
      paddingY = _ref2.paddingY;
  return spaceStyler([{
    k: 'margin',
    v: margin
  }, {
    k: 'margin-bottom',
    v: marginBottom
  }, {
    k: 'margin-left',
    v: marginLeft
  }, {
    k: 'margin-right',
    v: marginRight
  }, {
    k: 'margin-top',
    v: marginTop
  }, {
    k: 'padding',
    v: padding
  }, {
    k: 'padding-bottom',
    v: paddingBottom
  }, {
    k: 'padding-left',
    v: paddingLeft
  }, {
    k: 'padding-right',
    v: paddingRight
  }, {
    k: 'padding-top',
    v: paddingTop
  }].concat(_toConsumableArray(marginY ? [{
    k: 'margin-top',
    v: marginY
  }, {
    k: 'margin-bottom',
    v: marginY
  }] : []), _toConsumableArray(marginX ? [{
    k: 'margin-left',
    v: marginX
  }, {
    k: 'margin-right',
    v: marginX
  }] : []), _toConsumableArray(paddingY ? [{
    k: 'padding-top',
    v: paddingY
  }, {
    k: 'padding-bottom',
    v: paddingY
  }] : []), _toConsumableArray(paddingX ? [{
    k: 'padding-left',
    v: paddingX
  }, {
    k: 'padding-right',
    v: paddingX
  }] : [])));
});
Space.propTypes = {
  children: node,
  content: string,
  margin: oneOf(Object.values(THEME_SIZE)),
  marginY: oneOf(Object.values(THEME_SIZE)),
  marginX: oneOf(Object.values(THEME_SIZE)),
  marginTop: oneOf(Object.values(THEME_SIZE)),
  marginRight: oneOf(Object.values(THEME_SIZE)),
  marginBottom: oneOf(Object.values(THEME_SIZE)),
  marginLeft: oneOf(Object.values(THEME_SIZE)),
  padding: oneOf(Object.values(THEME_SIZE)),
  paddingY: oneOf(Object.values(THEME_SIZE)),
  paddingX: oneOf(Object.values(THEME_SIZE)),
  paddingTop: oneOf(Object.values(THEME_SIZE)),
  paddingRight: oneOf(Object.values(THEME_SIZE)),
  paddingBottom: oneOf(Object.values(THEME_SIZE)),
  paddingLeft: oneOf(Object.values(THEME_SIZE))
};
//# sourceMappingURL=space.js.map