import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

// React
import React from 'react'; // React Dropzone

import { useDropzone } from 'react-dropzone'; // Style

import styled from 'styled-components';
export var DragAndDropable = function DragAndDropable(_ref) {
  var children = _ref.children,
      onFileDrop = _ref.onFileDrop,
      onHover = _ref.onHover,
      onLeave = _ref.onLeave;

  var onDragEnter = function onDragEnter() {
    onHover();
  };

  var onDragLeave = function onDragLeave() {
    onLeave();
  };

  var onDrop = function onDrop(e) {
    onFileDrop(e);
  };

  var _useDropzone = useDropzone({
    onDrop: onDrop,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave
  }),
      getRootProps = _useDropzone.getRootProps,
      isDragAccept = _useDropzone.isDragAccept,
      isDragActive = _useDropzone.isDragActive,
      isDragReject = _useDropzone.isDragReject;

  return /*#__PURE__*/React.createElement(Container, getRootProps({
    isDragActive: isDragActive,
    isDragAccept: isDragAccept,
    isDragReject: isDragReject
  }), children);
};
DragAndDropable.displayName = "DragAndDropable";
var Container = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  outline: none;\n  * {\n    &::-webkit-scrollbar {\n      width: 0.25rem;\n      background-color: ", ";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      border-radius: 10px;\n      background-color: ", ";\n    }\n  }\n"])), function (_ref2) {
  var MESSAGING = _ref2.theme.MESSAGING;
  return MESSAGING.scrollBarColour;
}, function (_ref3) {
  var MESSAGING = _ref3.theme.MESSAGING;
  return MESSAGING.scrollThumbColour;
});
//# sourceMappingURL=index.js.map