import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

/**
 * Components - Molecules- Image Locations - Marker
 */
// React
import React from 'react';
import { object } from 'prop-types'; // Style

import styled, { css, keyframes } from 'styled-components'; // UI

import { Icon, LazyIcon } from '../../../';
export var ImageMarker = function ImageMarker(_ref) {
  var _styles$shape, _styles$shape2;

  var coordinates = _ref.coordinates,
      customIcon = _ref.customIcon,
      styles = _ref.styles;

  if (customIcon) {
    var _styles$width;

    return /*#__PURE__*/React.createElement(CustomIconWrapper, {
      coordinates: coordinates,
      styles: styles
    }, /*#__PURE__*/React.createElement(LazyIcon, {
      iconName: customIcon,
      size: (_styles$width = styles.width) !== null && _styles$width !== void 0 ? _styles$width : 24
    }));
  }

  return styles !== null && styles !== void 0 && styles.shape ? /*#__PURE__*/React.createElement(StyledIcon, {
    context: "primary",
    icon: styles === null || styles === void 0 ? void 0 : (_styles$shape = styles.shape) === null || _styles$shape === void 0 ? void 0 : _styles$shape.icon,
    prefix: styles === null || styles === void 0 ? void 0 : (_styles$shape2 = styles.shape) === null || _styles$shape2 === void 0 ? void 0 : _styles$shape2.prefix,
    pull: "left",
    size: "lg",
    coordinates: coordinates,
    styles: styles
  }) : /*#__PURE__*/React.createElement(StyledMarker, {
    coordinates: coordinates,
    styles: styles
  });
};
var blinker = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    50% {\n    opacity: 0;\n  }"])));
var commonMarkerCss = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  animation: ", ";\n  margin-left: ", ";\n  margin-top: ", ";\n  pointer-events: none;\n  position: absolute;\n  transition-duration: 0.2s;\n  transition-property: left, top;\n\n  ", "\n"])), function (_ref2) {
  var styles = _ref2.styles;
  return (styles === null || styles === void 0 ? void 0 : styles.animation) === 'blinker' ? css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          ", " 1s ease-in-out infinite forwards\n        "])), blinker) : '';
}, function (_ref3) {
  var styles = _ref3.styles;
  return '-' + (styles !== null && styles !== void 0 && styles.width ? Number(styles.width.replace('px', '') / 2) + 'px' : '7px');
}, function (_ref4) {
  var styles = _ref4.styles;
  return '-' + (styles !== null && styles !== void 0 && styles.height ? Number(styles.height.replace('px', '') / 2) + 'px' : '7px');
}, function (_ref5) {
  var coordinates = _ref5.coordinates;
  return coordinates && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      display: block;\n      left: ", "%;\n      top: ", "%;\n    "])), coordinates.x, coordinates.y);
});
var CustomIconWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  path {\n    fill: ", " !important;\n  }\n  ", "\n"])), function (_ref6) {
  var styles = _ref6.styles;
  return styles !== null && styles !== void 0 && styles.color ? styles === null || styles === void 0 ? void 0 : styles.color : 'red';
}, commonMarkerCss);
var StyledIcon = styled(Icon)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: white;\n  color: ", ";\n\n  ", "\n"])), function (_ref7) {
  var styles = _ref7.styles;
  return styles !== null && styles !== void 0 && styles.color ? styles === null || styles === void 0 ? void 0 : styles.color : 'red';
}, commonMarkerCss);
var StyledMarker = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: ", ";\n  display: none;\n  height: ", ";\n  width: ", ";\n  ", "\n"])), function (_ref8) {
  var styles = _ref8.styles;
  return styles !== null && styles !== void 0 && styles.color ? styles.color : 'red';
}, function (_ref9) {
  var styles = _ref9.styles;
  return styles !== null && styles !== void 0 && styles.borderRadius ? styles.borderRadius : '50%';
}, function (_ref10) {
  var styles = _ref10.styles;
  return styles !== null && styles !== void 0 && styles.height ? styles.height : '15px';
}, function (_ref11) {
  var styles = _ref11.styles;
  return styles !== null && styles !== void 0 && styles.width ? styles.width : '15px';
}, commonMarkerCss);
ImageMarker.propTypes = {
  coordinates: object,
  styles: object
};
ImageMarker.defaultProps = {
  styles: {
    animation: '',
    borderRadius: '50%',
    color: 'red',
    height: '20px',
    shape: '',
    width: '20px'
  }
};
//# sourceMappingURL=imageMarker.js.map