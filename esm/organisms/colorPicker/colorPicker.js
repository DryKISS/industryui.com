import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Organisms - Color picker
 */
// React
import React from 'react';
import { string, func } from 'prop-types'; // React Color

import { SketchPicker, CirclePicker, TwitterPicker, GithubPicker } from 'react-color';
export var ColorPicker = function ColorPicker(_ref) {
  var type = _ref.type,
      onChangeComplete = _ref.onChangeComplete,
      props = _objectWithoutProperties(_ref, ["type", "onChangeComplete"]);

  switch (type) {
    case 'circle':
      return /*#__PURE__*/React.createElement(CirclePicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    case 'sketch':
      return /*#__PURE__*/React.createElement(SketchPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    case 'github':
      return /*#__PURE__*/React.createElement(GithubPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    case 'twitter':
      return /*#__PURE__*/React.createElement(TwitterPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));

    default:
      return /*#__PURE__*/React.createElement(SketchPicker, _extends({
        onChangeComplete: onChangeComplete
      }, props));
  }
};
ColorPicker.defaultProps = {
  type: 'github',
  width: '214px'
};
ColorPicker.propTypes = {
  type: string,
  onChangeComplete: func.isRequired,
  width: string
};
//# sourceMappingURL=colorPicker.js.map