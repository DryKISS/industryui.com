import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */
// React
import React from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { themeColour } from '../../theme/utils/colour';
import { propTypes, defaultProps } from './props';
export var Heading = function Heading(_ref) {
  var className = _ref.className,
      content = _ref.content,
      context = _ref.context,
      noMargin = _ref.noMargin,
      noWrap = _ref.noWrap,
      style = _ref.style,
      tag = _ref.tag;
  return /*#__PURE__*/React.createElement(StyledHeading, {
    as: tag,
    className: className,
    context: context,
    noMargin: noMargin,
    noWrap: noWrap,
    itemProp: "name headline",
    rel: "bookmark",
    style: style
  }, content && content.__html ? /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: content
  }) : content);
};
Heading.displayName = "Heading";
var StyledHeading = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: normal;\n  ", "\n  position: relative;\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return themeColour(props);
}, function (_ref2) {
  var as = _ref2.as,
      theme = _ref2.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    text-transform: ", ";\n    margin: 0;\n  "])), theme.HEADINGS[as].fontFamily, theme.HEADINGS[as].fontSize, theme.HEADINGS[as].lineHeight, theme.HEADINGS[as].textTransform);
}, function (_ref3) {
  var ellipsis = _ref3.ellipsis;
  return ellipsis && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    "])));
}, function (_ref4) {
  var noWrap = _ref4.noWrap;
  return noWrap && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    "])));
});
Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
//# sourceMappingURL=heading.js.map