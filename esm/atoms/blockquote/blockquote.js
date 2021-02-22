import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Blockquote
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Style

import styled from 'styled-components';
export var Blockquote = function Blockquote(_ref) {
  var footer = _ref.footer,
      text = _ref.text;
  return /*#__PURE__*/React.createElement(StyledBlockquote, null, /*#__PURE__*/React.createElement(StyledText, null, text), footer && /*#__PURE__*/React.createElement(StyledFooter, null, footer));
};
Blockquote.displayName = "Blockquote";
var StyledBlockquote = styled.blockquote(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-left: 5px solid rgba(240, 0, 0, 0.5);\n  margin: 1rem 0;\n  padding: 10px 20px;\n"])));
var StyledText = styled.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #000;\n  font-size: 2rem;\n  font-weight: normal;\n  margin: 0;\n"])));
var StyledFooter = styled.footer(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n\n  &::before {\n    content: '\\2014 \\A0';\n  }\n"], ["\n  font-size: 1rem;\n\n  &::before {\n    content: '\\\\2014 \\\\A0';\n  }\n"])));
Blockquote.propTypes = {
  footer: string,
  text: string.isRequired
};
//# sourceMappingURL=blockquote.js.map