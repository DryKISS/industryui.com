import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Molecules - Row
 */
// React
import { memo } from 'react';
import { bool, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { themeBackground } from '../../../theme/utils/background';
export var TableRow = /*#__PURE__*/memo(styled.tr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var pointer = _ref.pointer;
  return pointer ? 'pointer' : 'initial';
}, function (_ref2) {
  var context = _ref2.context,
      striped = _ref2.striped,
      theme = _ref2.theme;
  return !context && striped && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      :nth-child(odd) {\n        background-color: ", ";\n      }\n    "])), theme.COLOUR.light);
}, function (props) {
  return props.context && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", "\n      color: white;\n    "])), themeBackground(props));
}, function (_ref3) {
  var hover = _ref3.hover;
  return hover && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      :hover {\n        background-color: #eee;\n      }\n    "])));
}));
TableRow.propTypes = {
  context: string,
  hover: bool,
  pointer: bool,
  striped: bool
};
//# sourceMappingURL=row.js.map