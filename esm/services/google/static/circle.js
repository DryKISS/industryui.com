import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * Google Maps Circle
 * Creates or encodes a Circle for use on a Google Map
 *
 * @see https://developers.google.com/maps/documentation/javascript/shapes#circles
 * @see https://developers.google.com/maps/documentation/javascript/examples/circle-simple
 *
 * @see https://stackoverflow.com/questions/36506668/google-static-map-draw-a-circle
 * @see https://stackoverflow.com/questions/7316963/drawing-a-circle-google-static-maps
 */
function locationBuilder(location) {
  var _this = this;

  var urlParts = [];

  if (Array.isArray(location)) {
    var arrParts = location.map(function (val) {
      return _this.locationBuilder(val);
    });
    urlParts.push.apply(urlParts, _toConsumableArray(arrParts));
  }

  if (typeof location === 'string' || typeof location === 'number') {
    urlParts.push(location);
  }

  if (_typeof(location) === 'object' && location.lat && location.lng) {
    urlParts.push("".concat(location.lat, ",").concat(location.lng));
  }

  return urlParts.join('%7C');
}

function GMapCircle(lat, lng, rad) {
  var detail = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 8;
  var r = 6371;
  var pi = Math.PI;
  var staticMapSrc = '';

  var _lat = lat * pi / 180;

  var _lng = lng * pi / 180;

  var d = rad / 1000 / r;
  var i = 0;

  for (i = 0; i <= 360; i += detail) {
    var brng = i * pi / 180;
    var pLat = Math.asin(Math.sin(_lat) * Math.cos(d) + Math.cos(_lat) * Math.sin(d) * Math.cos(brng));
    var pLng = (_lng + Math.atan2(Math.sin(brng) * Math.sin(d) * Math.cos(_lat), Math.cos(d) - Math.sin(_lat) * Math.sin(pLat))) * 180 / pi;
    pLat = pLat * 180 / pi;
    staticMapSrc += locationBuilder(pLat + ',' + pLng); // staticMapSrc += '|' + pLat + ',' + pLng
  }

  return encodeURI(staticMapSrc);
}

export function encodeCircle(latitude, longitude, radius) {
  var circle = GMapCircle(latitude, longitude, radius);
  return circle;
}
//# sourceMappingURL=circle.js.map