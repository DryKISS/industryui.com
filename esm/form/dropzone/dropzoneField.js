import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Form - Dropzone
 */
// React
import React from 'react';
import { bool, object, string } from 'prop-types'; // React Hook Form

import { Controller } from 'react-hook-form'; // UI

import { Dropzone } from './react-dropzone';
export var DropzoneField = function DropzoneField(_ref) {
  var control = _ref.control,
      name = _ref.name,
      props = _objectWithoutProperties(_ref, ["control", "name"]);

  return /*#__PURE__*/React.createElement(Controller, _extends({
    as: Dropzone,
    control: control,
    name: name
  }, props));
};
DropzoneField.displayName = "DropzoneField";
DropzoneField.propTypes = {
  accept: string,
  control: object,
  disabled: bool,
  errors: object,
  multiple: bool,
  name: string
};
DropzoneField.defaultProps = {
  disabled: false,
  name: 'dropzone',
  multiple: false
};
//# sourceMappingURL=dropzoneField.js.map