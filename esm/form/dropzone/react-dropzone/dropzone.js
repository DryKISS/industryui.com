import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2;

/**
 * Dropzone
 * Allows a user to Upload multiple images
 */
// React
import React, { useEffect, useState } from 'react';
import { bool, string } from 'prop-types'; // React Dropzone

import { useDropzone } from 'react-dropzone'; // UI

import { Column, Row, Text } from '../../../';
import { Accept } from './accept';
import { DropzonePreview } from './preview'; // Style

import styled, { css } from 'styled-components';
export var Dropzone = function Dropzone(_ref) {
  var accept = _ref.accept,
      disabled = _ref.disabled,
      multiple = _ref.multiple,
      onChange = _ref.onChange;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  useEffect(function () {
    return function () {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(function (file) {
        return URL.revokeObjectURL(file.preview);
      });
    };
  }, [files]);

  var _useDropzone = useDropzone({
    accept: accept,
    disabled: disabled,
    multiple: multiple,
    onDrop: function onDrop(acceptedFiles) {
      var accepted = acceptedFiles.map(function (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      });
      setFiles(accepted);

      if (onChange) {
        onChange(accepted);
      }
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive,
      isDragAccept = _useDropzone.isDragAccept,
      isDragReject = _useDropzone.isDragReject;

  var removeFile = function removeFile(file) {
    var newFiles = _toConsumableArray(files);

    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  var thumbs = function thumbs() {
    return /*#__PURE__*/React.createElement(StyledContainer, {
      fluid: true
    }, /*#__PURE__*/React.createElement(Row, null, files.map(function (file) {
      return /*#__PURE__*/React.createElement(Column, {
        md: 3,
        key: file.name
      }, /*#__PURE__*/React.createElement(DropzonePreview, {
        file: file,
        handleRemove: function handleRemove() {
          return removeFile(file);
        },
        index: file.name
      }));
    })));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledContainer, _extends({
    dragActive: isDragActive,
    dragAccept: isDragAccept,
    dragReject: isDragReject,
    disabled: disabled
  }, getRootProps()), /*#__PURE__*/React.createElement("input", getInputProps()), isDragAccept && /*#__PURE__*/React.createElement(Text, null, "Accepted"), isDragReject && /*#__PURE__*/React.createElement(Text, null, "Rejected"), isDragActive ? /*#__PURE__*/React.createElement(Text, null, "Drop here") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, null, "Drop, or click to select"), accept && /*#__PURE__*/React.createElement(Accept, {
    accept: accept
  }), multiple ? /*#__PURE__*/React.createElement(Text, null, "Accepts multiple files") : /*#__PURE__*/React.createElement(Text, null, "Single file only"))), files.length > 0 && thumbs());
};
var StyledContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-color: ", ";\n  border-radius: 0.25rem;\n  border-style: ", ";\n  border-width: 2px;\n  cursor: pointer;\n  margin-bottom: 1rem;\n  height: 25vh;\n  padding: 1rem;\n  outline: none;\n  overflow: auto;\n  text-align: center;\n  transition: border 0.24s ease-in-out;\n  width: 100%;\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.light;
}, function (_ref3) {
  var dragAccept = _ref3.dragAccept,
      dragReject = _ref3.dragReject,
      COLOUR = _ref3.theme.COLOUR;
  return dragReject && COLOUR.danger || dragAccept && COLOUR.success;
}, function (_ref4) {
  var dragActive = _ref4.dragActive;
  return dragActive ? 'solid' : 'dashed';
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      cursor: not-allowed;\n      opacity: 0.5;\n    "])));
});
Dropzone.propTypes = {
  accept: string,
  disabled: bool,
  multiple: bool
};
Dropzone.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: true
};
//# sourceMappingURL=dropzone.js.map