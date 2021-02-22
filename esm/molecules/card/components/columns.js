import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Card - Columns
 * Cards can be organized into Masonry-like columns
 */
// React
import React from 'react';
import { node } from 'prop-types'; // Style

import styled from 'styled-components';
export var CardColumns = function CardColumns(_ref) {
  var childern = _ref.childern;
  return /*#__PURE__*/React.createElement(StyledColumns, null, childern);
};
CardColumns.displayName = "CardColumns";
var StyledColumns = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n"])));
CardColumns.propTypes = {
  childern: node.isRequired
};
//# sourceMappingURL=columns.js.map