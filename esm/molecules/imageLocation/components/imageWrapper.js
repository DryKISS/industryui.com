import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Image Location
 */
// React
import React, { useRef, useState } from 'react';
import { func, object } from 'prop-types';
import styled from 'styled-components'; // UI

import { Image, ImageMarker } from '../../../';
var imageHeight = 0;
var imageWidth = 0;
export var ImageWrapper = function ImageWrapper(_ref) {
  var coordinates = _ref.coordinates,
      customIcon = _ref.customIcon,
      item = _ref.item,
      markerStyles = _ref.markerStyles,
      setCoordinates = _ref.setCoordinates;
  var imageRef = useRef();

  var _useState = useState(coordinates),
      _useState2 = _slicedToArray(_useState, 2),
      MarkerCoordinates = _useState2[0],
      setMarkerCoordinates = _useState2[1];

  var handleImageClick = function handleImageClick(event) {
    var image = imageRef.current;
    imageWidth = image.clientWidth;
    imageHeight = image.clientHeight;
    var coordinates = {
      x: event.nativeEvent.offsetX * 100 / imageWidth,
      y: event.nativeEvent.offsetY * 100 / imageHeight
    };
    setCoordinates(coordinates);
    setMarkerCoordinates(function (co) {
      return coordinates;
    });
  };

  return /*#__PURE__*/React.createElement(StyledImageWrapper, null, /*#__PURE__*/React.createElement(Image, {
    ref: imageRef,
    onClick: handleImageClick,
    alt: item.name,
    fluid: true,
    src: item.filename
  }), (MarkerCoordinates === null || MarkerCoordinates === void 0 ? void 0 : MarkerCoordinates.x) && /*#__PURE__*/React.createElement(ImageMarker, {
    customIcon: customIcon,
    coordinates: MarkerCoordinates,
    key: item.id,
    styles: markerStyles
  }));
};
ImageWrapper.displayName = "ImageWrapper";
var StyledImageWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  ", " {\n    width: 100%;\n  }\n"])), Image);
ImageWrapper.propTypes = {
  coordinates: object,
  item: object.isRequired,
  setCoordinates: func.isRequired
};
//# sourceMappingURL=imageWrapper.js.map