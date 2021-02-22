import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Dropzone - Preview
 * Shows the uploaded image preview
 */
// React
import React from 'react';
import { any, func } from 'prop-types'; // UI

import { Close, Image } from '../../../'; // Style

import styled from 'styled-components';
export var DropzonePreview = function DropzonePreview(_ref) {
  var file = _ref.file,
      handleRemove = _ref.handleRemove,
      index = _ref.index;
  return /*#__PURE__*/React.createElement(StyledPreview, null, /*#__PURE__*/React.createElement(Close, {
    click: handleRemove
  }), /*#__PURE__*/React.createElement(Image, {
    alt: "Upload ".concat(index),
    src: file.preview
  }));
};
DropzonePreview.displayName = "DropzonePreview";
var StyledPreview = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #000;\n  margin-bottom: 1.5rem;\n  z-index: 1;\n"])));
DropzonePreview.propTypes = {
  file: any.isRequired,
  handleRemove: func.isRequired,
  index: any.isRequired
};
//# sourceMappingURL=preview.js.map