import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

/**
 * Components - Atoms - Text
 */
// React
import React from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { SPACER, MEDIA_QUERY } from '../../';
import { themeDisplay } from '../../theme/utils/display'; // Props

import { propTypes, defaultProps } from './props';
export var Text = function Text(_ref) {
  var align = _ref.align,
      children = _ref.children,
      className = _ref.className,
      content = _ref.content,
      context = _ref.context,
      size = _ref.size,
      weight = _ref.weight;
  return /*#__PURE__*/React.createElement(StyledText, {
    align: align,
    className: className,
    context: context,
    size: size
  }, content || children);
};
Text.displayName = "Text";
var StyledText = styled.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 0;\n  padding: 0;\n  text-align: ", ";\n\n  ", "\n\n  ", "\n  ", "\n\n  ", "\n  ", "\n\n\n  ", "\n"])), function (_ref2) {
  var context = _ref2.context,
      _ref2$theme = _ref2.theme,
      COLOUR = _ref2$theme.COLOUR,
      TEXT = _ref2$theme.TEXT;
  return context ? COLOUR[context] : TEXT.DEFAULT_COLOUR;
}, function (_ref3) {
  var align = _ref3.align;
  return align;
}, function (_ref4) {
  var _theme$TEXT$FONT_SIZE, _theme$TEXT$LINE_HEIG;

  var size = _ref4.size,
      theme = _ref4.theme;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: ", ";\n    line-height: ", ";\n  "])), (_theme$TEXT$FONT_SIZE = theme.TEXT.FONT_SIZE[size]) !== null && _theme$TEXT$FONT_SIZE !== void 0 ? _theme$TEXT$FONT_SIZE : '1rem', (_theme$TEXT$LINE_HEIG = theme.TEXT.LINE_HEIGHT[size]) !== null && _theme$TEXT$LINE_HEIG !== void 0 ? _theme$TEXT$LINE_HEIG : '1rem');
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'xxl' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), MEDIA_QUERY.phone(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        font-size: 2rem;\n      "]))), MEDIA_QUERY.tablet(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        font-size: 3rem;\n      "]))), MEDIA_QUERY.desktop(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        font-size: 4rem;\n      "]))), MEDIA_QUERY.giant(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        font-size: 5rem;\n      "]))));
}, function (_ref6) {
  var size = _ref6.size;
  return size === 'xxxl' && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      ", "\n      ", "\n      ", "\n      ", "\n    "])), MEDIA_QUERY.phone(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        font-size: 5rem;\n      "]))), MEDIA_QUERY.tablet(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        font-size: 6rem;\n      "]))), MEDIA_QUERY.desktop(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        font-size: 7rem;\n      "]))), MEDIA_QUERY.giant(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        font-size: 8rem;\n      "]))));
}, function (theme) {
  return themeDisplay(theme);
}, function (theme) {
  return SPACER(theme);
}, function (_ref7) {
  var weight = _ref7.weight;
  return weight && css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      font-weight: ", ";\n    "])), weight === 'light' ? 400 : weight === 'regular' ? 500 : weight === 'semiBold' ? 600 : weight === 'bold' ? 700 : 500);
});
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
//# sourceMappingURL=text.js.map