import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Card - Groups
 * Use card groups to render cards as a single, attached element with equal width and height columns
 */
// React
import React from 'react';
import { node } from 'prop-types'; // Style

import styled from 'styled-components';
export var CardGroups = function CardGroups(_ref) {
  var childern = _ref.childern;
  return /*#__PURE__*/React.createElement(StyledGroups, null, childern);
};
CardGroups.displayName = "CardGroups";
var StyledGroups = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n"])));
CardGroups.propTypes = {
  childern: node.isRequired
};
//# sourceMappingURL=groups.js.map