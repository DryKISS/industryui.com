import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Head
 */
// React
import { memo } from 'react';
import { bool, oneOfType, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var TableHead = /*#__PURE__*/memo(styled.th(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-bottom: 2px solid ", ";\n  border-top: 1px solid ", ";\n  padding: ", ";\n  text-align: ", ";\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.COLOUR.dark;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.dark;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.TABLE.padding;
}, function (_ref4) {
  var align = _ref4.align;
  return align ? 'center' : 'left';
}, function (_ref5) {
  var sortable = _ref5.sortable;
  return sortable && 'cursor: pointer';
}));
TableHead.propTypes = {
  align: oneOfType([string, bool]),
  sortable: bool
};
//# sourceMappingURL=head.js.map