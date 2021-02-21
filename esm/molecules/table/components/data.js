import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Table - Data
 */
// React
import { memo } from 'react';
import { bool, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var TableData = /*#__PURE__*/memo(styled.td(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  padding: ", ";\n  text-align: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.COLOUR.dark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.TABLE.padding;
}, function (_ref3) {
  var align = _ref3.align;
  return align && 'center';
}));
TableData.propTypes = {
  align: oneOfType([string, bool])
};
//# sourceMappingURL=data.js.map