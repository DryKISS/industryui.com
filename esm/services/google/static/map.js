import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

/**
 * Google Static Map Service Class
 * Description: Generates an url for the static map
 *
 * @param {Array} Obj.paths
 * [{ color: '0x003753', geodesic: true, weight: '5', points: ['WC2E 9DD', 'SW1A']}]
 */
// UI
import { encodeCircle } from './circle';
export var StaticMap = /*#__PURE__*/function () {
  function StaticMap(_ref) {
    var apiKey = _ref.apiKey,
        center = _ref.center,
        channel = _ref.channel,
        client = _ref.client,
        _ref$format = _ref.format,
        format = _ref$format === void 0 ? 'png' : _ref$format,
        language = _ref.language,
        _ref$location = _ref.location,
        location = _ref$location === void 0 ? '' : _ref$location,
        _ref$maptype = _ref.maptype,
        maptype = _ref$maptype === void 0 ? 'roadmap' : _ref$maptype,
        _ref$markers = _ref.markers,
        markers = _ref$markers === void 0 ? [] : _ref$markers,
        _ref$paths = _ref.paths,
        paths = _ref$paths === void 0 ? [] : _ref$paths,
        region = _ref.region,
        _ref$rootURL = _ref.rootURL,
        rootURL = _ref$rootURL === void 0 ? 'https://maps.googleapis.com/maps/api/staticmap' : _ref$rootURL,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 1 : _ref$scale,
        signature = _ref.signature,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? '400x200' : _ref$size,
        style = _ref.style,
        visible = _ref.visible,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 15 : _ref$zoom;

    _classCallCheck(this, StaticMap);

    this.apiKey = apiKey;
    this.channel = channel;
    this.center = center;
    this.client = client;
    this.format = format;
    this.language = language;
    this.location = location;
    this.maptype = maptype;
    this.markers = markers;
    this.paths = paths;
    this.region = region;
    this.rootURL = rootURL;
    this.scale = scale;
    this.signature = signature;
    this.size = size;
    this.style = style;
    this.visible = visible;
    this.zoom = zoom;
  }

  _createClass(StaticMap, [{
    key: "urlBuilder",
    value: function urlBuilder(property, value, separator) {
      if (value) {
        return "".concat(property).concat(separator).concat(value);
      }

      return null;
    }
  }, {
    key: "renderBaseMap",
    value: function renderBaseMap() {
      var urlParts = [];
      urlParts.push(this.urlBuilder('key', this.apiKey, '='));
      urlParts.push(this.urlBuilder('center', this.center, '='));
      urlParts.push(this.urlBuilder('channel', this.channel, '='));
      urlParts.push(this.urlBuilder('client', this.client, '='));
      urlParts.push(this.urlBuilder('format', this.format, '='));
      urlParts.push(this.urlBuilder('language', this.language, '='));
      urlParts.push(this.urlBuilder('maptype', this.maptype, '='));
      urlParts.push(this.urlBuilder('region', this.region, '='));
      urlParts.push(this.urlBuilder('scale', this.scale, '='));
      urlParts.push(this.urlBuilder('signature', this.signature, '='));
      urlParts.push(this.urlBuilder('size', this.size, '='));
      urlParts.push(this.urlBuilder('style', this.style, '='));
      urlParts.push(this.urlBuilder('visible', this.visible, '='));
      urlParts.push(this.urlBuilder('zoom', this.zoom, '='));
      var parts = urlParts.filter(function (x) {
        return x;
      }).join('&');
      return "".concat(this.rootURL, "?").concat(parts);
    }
  }, {
    key: "locationBuilder",
    value: function locationBuilder(location) {
      var _this = this;

      var urlParts = [];

      if (Array.isArray(location)) {
        var arrParts = location.map(function (val) {
          return _this.locationBuilder(val);
        });
        urlParts.push.apply(urlParts, _toConsumableArray(arrParts));
      }

      if (typeof location === 'string' || typeof location === 'number') {
        urlParts.push(encodeURI(location));
      }

      if (_typeof(location) === 'object' && location.lat && location.lng) {
        urlParts.push("".concat(location.lat, ",").concat(location.lng));
      }

      return urlParts.join('%7C');
    } // Create the URL segment for the Path

  }, {
    key: "renderPath",
    value: function renderPath(_ref2) {
      var circle = _ref2.circle,
          color = _ref2.color,
          fillcolor = _ref2.fillcolor,
          geodesic = _ref2.geodesic,
          points = _ref2.points,
          weight = _ref2.weight;
      var urlParts = [];

      if (circle) {
        var enc = encodeCircle(circle.latitude, circle.longitude, circle.radius);
        urlParts.push(this.urlBuilder('', this.locationBuilder("".concat(enc)), ''));
      }

      urlParts.push(this.urlBuilder('color', color, ':'));
      urlParts.push(this.urlBuilder('weight', weight, ':'));
      urlParts.push(this.urlBuilder('fillcolor', fillcolor, ':'));
      urlParts.push(this.urlBuilder('geodesic', geodesic, ':'));
      urlParts.push(this.urlBuilder('', this.locationBuilder(points), ''));
      var url = urlParts.filter(function (x) {
        return x;
      }).join('%7C');
      return "path=".concat(url);
    }
  }, {
    key: "renderParts",
    value: function renderParts() {
      var _this2 = this;

      return this.paths.map(function (path) {
        return _this2.renderPath(path);
      });
    }
  }, {
    key: "renderMarkers",
    value: function renderMarkers() {
      var markers = this.markers,
          locationBuilder = this.locationBuilder,
          location = this.location;
      var urlParts = {};

      if (markers.length) {
        urlParts = markers.map(function (marker) {
          var markerUrl = 'markers=';

          switch (_typeof(marker)) {
            case 'string':
              {
                markerUrl += locationBuilder(marker);
                break;
              }

            case 'object':
              {
                var colour = marker.colour,
                    label = marker.label,
                    _location = marker.location;
                var markerColour = colour && "color:".concat(colour, "|");
                var markerLabel = label && "label:".concat(label, "|");

                var markerLocation = _location && "".concat(locationBuilder(_location), "|");

                markerUrl += markerColour + markerLabel + markerLocation;
                break;
              }
          }

          return markerUrl;
        });
      } else {
        urlParts = ["markers=".concat(locationBuilder(location))];
      }

      return urlParts.join('&');
    }
  }, {
    key: "generateUrl",
    value: function generateUrl() {
      var childrenUrlParts = this.renderParts() || [];
      var mainUrlParts = this.renderBaseMap();
      var markerParts = this.renderMarkers();
      var url = "".concat(mainUrlParts, "&").concat(childrenUrlParts, "&").concat(markerParts);
      return url;
    }
  }]);

  return StaticMap;
}();
//# sourceMappingURL=map.js.map