import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Blog - Section
 * Creates a module in the sidebar
 */
// React
import React from 'react';
import { node, string } from 'prop-types'; // UI

import { Divider, Heading } from '../../../'; // Style

import styled from 'styled-components';
export var BlogSection = function BlogSection(_ref) {
  var children = _ref.children,
      heading = _ref.heading;
  return /*#__PURE__*/React.createElement(StyledSection, null, heading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledHeading, {
    content: heading,
    context: "primary",
    noMargin: true,
    tag: "h3"
  }), /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  })), children);
};
BlogSection.displayName = "BlogSection";
var StyledSection = styled.dl(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 1rem;\n"])));
var StyledHeading = styled(Heading)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 1.25rem;\n"])));
BlogSection.propTypes = {
  children: node.isRequired,
  heading: string
};
//# sourceMappingURL=section.js.map