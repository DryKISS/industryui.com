import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Navbar - Contained
 * Places the navbar in a container
 */
// React
import React from 'react';
import { node } from 'prop-types'; // UI

import { Container } from '../../../../'; // Style

import styled from 'styled-components';
export var Contained = function Contained(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/React.createElement(StyledContainer, null, content());
};
Contained.displayName = "Contained";
var StyledContainer = styled(Container)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 100%;\n"])));
Contained.propTypes = {
  content: node.isRequired
};
//# sourceMappingURL=contained.js.map