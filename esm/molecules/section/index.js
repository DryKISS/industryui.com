import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Section
 * Seperates a landing page module
 */
// React
import React from 'react';
import { any, bool, node, string } from 'prop-types'; // UI

import { Container, Heading, Row } from '../../'; // Style

import styled from 'styled-components';
export var Section = function Section(_ref) {
  var children = _ref.children,
      className = _ref.className,
      heading = _ref.heading,
      row = _ref.row,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyleSection, null, /*#__PURE__*/React.createElement(Container, null, heading && /*#__PURE__*/React.createElement(Heading, {
    className: "text-center",
    content: heading,
    context: "primary",
    tag: "h2"
  }), row ? /*#__PURE__*/React.createElement(Row, null, children) : children));
};
Section.displayName = "Section";
var StyleSection = styled.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-top: 4px solid #ecf0f3;\n  padding: 3rem 0;\n"])));
Section.propTypes = {
  children: node,
  className: any,
  heading: string,
  row: bool,
  style: any
};
Section.defaultProps = {
  children: '',
  row: true
};
//# sourceMappingURL=index.js.map