import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Dynamic Location
 * Showcases a dynamic map based on a location
 */
// React
import React from 'react';
import { array, node, string } from 'prop-types'; // React Google Maps

import { GoogleMap, InfoWindow as GoogleInfoWindow, Marker as GoogleMarker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { M as GoogleMarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';

var DynamicLocationHOC = function DynamicLocationHOC(Component) {
  return function (props) {
    // concat the apiKey
    var googleMapURL = "".concat(props.googleMapURL, "&key=").concat(props.apiKey);
    var containerElement = props.containerElement || /*#__PURE__*/React.createElement("div", {
      style: {
        height: props.containerHeight,
        width: props.containerWidth
      }
    });
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      containerElement: containerElement,
      googleMapURL: googleMapURL
    }));
  };
};

export var DynamicLocation = DynamicLocationHOC(withScriptjs(withGoogleMap(function (props) {
  return props.defaultCenter.lat && props.defaultCenter.lng ? /*#__PURE__*/React.createElement(GoogleMap, props) : null;
})));
DynamicLocation.displayName = 'DynamicLocation';
DynamicLocation.propTypes = _objectSpread({
  apiKey: string.isRequired,
  containerElement: node,
  containerHeight: string,
  containerWidth: string,
  loadingElement: node.isRequired,
  googleMapURL: string.isRequired,
  mapElement: node.isRequired,
  markers: array
}, GoogleMap.propTypes);
DynamicLocation.defaultProps = {
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?',
  loadingElement: /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    }
  }),
  containerHeight: '400px',
  containerWidth: '100%',
  mapElement: /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%'
    }
  }),
  zoom: 15
};
export var Marker = GoogleMarker;
Marker.propTypes = GoogleMarker.propTypes;
export var MarkerClusterer = GoogleMarkerClusterer;
MarkerClusterer.propTypes = GoogleMarkerClusterer.propTypes;
export var InfoWindow = GoogleInfoWindow;
InfoWindow.propTypes = GoogleInfoWindow.propTypes;
//# sourceMappingURL=index.js.map