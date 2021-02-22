import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Map - Static Location
 * Showcases a static map based on a location
 */
// React
import React, { useState, useEffect } from 'react';
import { array, number, node, object, oneOf, string } from 'prop-types'; // Services

import { StaticMap } from '../../../';
export var StaticLocation = function StaticLocation(_ref) {
  var apiKey = _ref.apiKey,
      center = _ref.center,
      channel = _ref.channel,
      className = _ref.className,
      client = _ref.client,
      _ref$container = _ref.container,
      Container = _ref$container === void 0 ? 'img' : _ref$container,
      format = _ref.format,
      language = _ref.language,
      location = _ref.location,
      maptype = _ref.maptype,
      markers = _ref.markers,
      paths = _ref.paths,
      region = _ref.region,
      scale = _ref.scale,
      signature = _ref.signature,
      size = _ref.size,
      style = _ref.style,
      styleMap = _ref.styleMap,
      visible = _ref.visible,
      zoom = _ref.zoom;

  var _size$split = size.split('x'),
      _size$split2 = _slicedToArray(_size$split, 2),
      width = _size$split2[0],
      height = _size$split2[1];

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      mapUrl = _useState2[0],
      setMapUrl = _useState2[1]; // on mount


  useEffect(function () {
    var map = new StaticMap({
      apiKey: apiKey,
      center: center,
      channel: channel,
      client: client,
      format: format,
      language: language,
      location: location,
      maptype: maptype,
      markers: markers,
      paths: paths,
      region: region,
      scale: scale,
      signature: signature,
      size: size,
      style: styleMap,
      visible: visible,
      zoom: zoom
    });
    var mapUrl = map.generateUrl();
    setMapUrl(mapUrl);
  }, []);
  return /*#__PURE__*/React.createElement(Container, {
    className: className,
    width: width,
    height: height,
    src: mapUrl,
    style: style,
    alt: "map"
  });
};
StaticLocation.displayName = "StaticLocation";
StaticLocation.propTypes = {
  apiKey: string.isRequired,
  center: string,
  channel: string,
  className: string,
  client: string,
  container: node,
  format: oneOf(['png', 'png8', 'png32', 'gif', 'jpg', 'jpg-baseline']),
  language: string,
  location: string,
  maptype: oneOf(['roadmap', 'satellite', 'terrain', 'hybrid']),
  markers: array,
  paths: array,
  region: string,
  scale: oneOf([1, 2, 4, '1', '2', '4']),
  signature: string,
  size: string.isRequired,
  style: object,
  styleMap: string,
  visible: string,
  zoom: number
};
StaticLocation.defaultProps = {
  format: 'png',
  maptype: 'roadmap',
  scale: 1,
  size: '400x200',
  zoom: 15
};
//# sourceMappingURL=staticLocation.js.map