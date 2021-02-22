import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Components - Atoms - Button - Toolbar
 */
// React
import React from 'react';
import { node, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var ButtonToolbar = function ButtonToolbar(_ref) {
  var align = _ref.align,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledToolbar, {
    align: align,
    "aria-label": "Toolbar with button groups",
    role: "toolbar"
  }, /*#__PURE__*/React.createElement(StyledGroup, {
    role: "group",
    "aria-label": "First group"
  }, children));
};
ButtonToolbar.displayName = "ButtonToolbar";
var StyledToolbar = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ", ";\n"])), function (_ref2) {
  var align = _ref2.align;
  return align;
});
var StyledGroup = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  position: relative;\n  vertical-align: middle;\n\n  a:hover {\n    color: white;\n  }\n\n  a:not(:last-child),\n  button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ", ";\n    border-top-right-radius: 0;\n  }\n\n  a:not(:first-child),\n  button:not(:first-child),\n  a:not(:first-child) button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n  }\n\n  a:not(:last-child) button {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ", ";\n    border-top-right-radius: 0;\n  }\n"])), function (_ref3) {
  var COLOUR = _ref3.theme.COLOUR;
  return COLOUR.light;
}, function (_ref4) {
  var COLOUR = _ref4.theme.COLOUR;
  return COLOUR.light;
});
ButtonToolbar.propTypes = {
  align: string,
  children: node.isRequired
};
ButtonToolbar.defaultProps = {
  align: 'center'
};
//# sourceMappingURL=toolbar.js.map