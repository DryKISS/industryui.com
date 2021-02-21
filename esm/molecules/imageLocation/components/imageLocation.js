import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Image Location
 */
// React
import React, { useEffect, useState } from 'react'; // Style

import styled from 'styled-components'; // UI

import { ImageWrapper } from '../../';
import { ImageLocationProps } from './props';
export var ImageLocation = function ImageLocation(_ref) {
  var coordinatesChange = _ref.coordinatesChange,
      customIcon = _ref.customIcon,
      initialCoordinates = _ref.initialCoordinates,
      item = _ref.item,
      markerStyles = _ref.markerStyles,
      show = _ref.show;

  var _useState = useState(initialCoordinates),
      _useState2 = _slicedToArray(_useState, 2),
      coordinates = _useState2[0],
      setCoordinates = _useState2[1];

  useEffect(function () {
    coordinatesChange && item && coordinates && coordinatesChange({
      coordinates: coordinates,
      item: item
    });
  }, [coordinates]);
  return /*#__PURE__*/React.createElement(StyledImageLocation, {
    show: show
  }, (item === null || item === void 0 ? void 0 : item.filename) && /*#__PURE__*/React.createElement(ImageWrapper, {
    customIcon: customIcon,
    coordinates: coordinates,
    markerStyles: markerStyles,
    item: item,
    setCoordinates: setCoordinates
  }));
};
ImageLocation.displayName = "ImageLocation";
var StyledImageLocation = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  overflow-x: auto;\n"])), function (_ref2) {
  var show = _ref2.show;
  return show ? 'block' : 'none';
});
ImageLocation.propTypes = ImageLocationProps;
ImageLocation.defaultProps = {
  show: true
};
//# sourceMappingURL=imageLocation.js.map