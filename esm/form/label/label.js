import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Form - Label
 */
// React
import React from 'react';
import { bool, node, string } from 'prop-types'; // Style

import styled from 'styled-components';
import { Space, Text } from '../../';
export var FormLabel = function FormLabel(_ref) {
  var children = _ref.children,
      id = _ref.id,
      label = _ref.label,
      show = _ref.show,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(StyledLabel, {
    hasChild: children,
    htmlFor: id,
    show: show
  }, /*#__PURE__*/React.createElement(Space, {
    marginBottom: "xs"
  }, /*#__PURE__*/React.createElement(Text, {
    size: size !== null && size !== void 0 ? size : 'md',
    colour: "darkText",
    content: label
  })), children);
};
FormLabel.displayName = "FormLabel";
var StyledLabel = styled.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  margin-bottom: ", ";\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n"])), function (_ref2) {
  var show = _ref2.show;
  return show ? 'block' : 'none';
}, function (_ref3) {
  var hasChild = _ref3.hasChild;
  return !hasChild ? '0' : '1rem';
});
FormLabel.propTypes = {
  children: node,
  id: string,
  label: string,
  show: bool
};
FormLabel.defaultProps = {
  show: true
};
//# sourceMappingURL=label.js.map