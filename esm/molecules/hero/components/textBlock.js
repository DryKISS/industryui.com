import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Hero - Text Block
 * Displays a text block with title, content, icon.
 */
// React
import React from 'react';
import { number, string, objectOf, oneOfType } from 'prop-types'; // UI

import { CardBody, MEDIA_QUERY } from '../../../';
import { Card } from '../../../molecules/card'; // Style

import styled, { css } from 'styled-components';
export var TextBlock = function TextBlock(_ref) {
  var children = _ref.children,
      offset = _ref.offset,
      position = _ref.position;
  return /*#__PURE__*/React.createElement(StyledCard, {
    rounded: false,
    position: position
  }, /*#__PURE__*/React.createElement(CardBody, {
    children: children
  }));
};
TextBlock.displayName = "TextBlock";
var bl = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  left: 6rem;\n  bottom: 0;\n"])));
var br = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  right: 6rem;\n  bottom: 0;\n"])));
var tl = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  left: 6rem;\n  top: 0;\n"])));
var tr = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  right: 6rem;\n  top: 0;\n"])));
var StyledCard = styled(Card)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: white;\n  margin: 0;\n  opacity: 0.95;\n  offset: ", ";\n  position: absolute;\n\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var offset = _ref2.offset;
  return offset;
}, MEDIA_QUERY.desktop(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 25rem;\n  "]))), function (_ref3) {
  var position = _ref3.position;
  return position === 'bl' && bl || position === 'br' && br || position === 'tl' && tl || position === 'tr' && tr;
});
TextBlock.propTypes = {
  offset: objectOf(oneOfType([number, string]))
};
//# sourceMappingURL=textBlock.js.map