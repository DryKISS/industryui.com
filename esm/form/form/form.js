import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Form - Form
 */
// React
import React from 'react';
import { any, func, node, string } from 'prop-types'; // Style

import styled from 'styled-components';
export var Form = function Form(_ref) {
  var children = _ref.children,
      className = _ref.className,
      handleSubmit = _ref.handleSubmit,
      id = _ref.id,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(StyledForm, {
    className: className,
    id: id,
    onSubmit: handleSubmit,
    style: style
  }, children);
};
Form.displayName = "Form";
var StyledForm = styled.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n"])));
Form.propTypes = {
  children: node.isRequired,
  className: any,
  handleSubmit: func.isRequired,
  id: string,
  style: any
};
//# sourceMappingURL=form.js.map