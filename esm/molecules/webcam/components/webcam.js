import _typeof from "@babel/runtime/helpers/esm/typeof";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _class, _temp;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Webcam
 */
// React
import React, { Component } from 'react';
import { bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'; // UI

import { Design } from './design'; // Style

import { withTheme } from 'styled-components';
var Webcam = withTheme((_temp = _class = /*#__PURE__*/function (_Component) {
  _inherits(Webcam, _Component);

  var _super = _createSuper(Webcam);

  function Webcam() {
    var _this;

    _classCallCheck(this, Webcam);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "hasGetUserMedia", function () {
      return !!(navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    });

    _defineProperty(_assertThisInitialized(_this), "handleUserMedia", function (err, stream) {
      var _this$props = _this.props,
          onUserMediaError = _this$props.onUserMediaError,
          onUserMedia = _this$props.onUserMedia;

      if (err) {
        _this.setState({
          hasUserMedia: false
        });

        onUserMediaError(err);
        return;
      }

      _this.stream = stream;

      try {
        _this.video.srcObject = stream;

        _this.setState({
          hasUserMedia: true
        });
      } catch (error) {
        _this.setState({
          hasUserMedia: true,
          src: window.URL.createObjectURL(stream)
        });
      }

      onUserMedia();
    });

    _this.state = {
      hasUserMedia: false,
      src: ''
    };
    return _this;
  }

  _createClass(Webcam, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.hasGetUserMedia()) return;
      var hasUserMedia = this.state.hasUserMedia;
      Webcam.mountedInstances.push(this);

      if (!hasUserMedia && !Webcam.userMediaRequested) {
        this.requestUserMedia();
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps) {
      var _this$props2 = this.props,
          audioConstraints = _this$props2.audioConstraints,
          videoConstraints = _this$props2.videoConstraints;

      if (JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(audioConstraints) || JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(videoConstraints)) {
        this.requestUserMedia();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var src = this.state.src;
      var index = Webcam.mountedInstances.indexOf(this);
      Webcam.mountedInstances.splice(index, 1);

      if (Webcam.mountedInstances.length === 0 && this.state.hasUserMedia) {
        if (this.stream.stop) {
          this.stream.stop();
        } else {
          if (this.stream.getVideoTracks) {
            this.stream.getVideoTracks().map(function (track) {
              return track.stop();
            });
          }

          if (this.stream.getAudioTracks) {
            this.stream.getAudioTracks().map(function (track) {
              return track.stop();
            });
          }
        }

        Webcam.userMediaRequested = false;
        window.URL.revokeObjectURL(src);
      }
    }
  }, {
    key: "getScreenshot",
    value: function getScreenshot() {
      var _this$props3 = this.props,
          screenshotFormat = _this$props3.screenshotFormat,
          screenshotQuality = _this$props3.screenshotQuality;
      var hasUserMedia = this.state.hasUserMedia;
      if (!hasUserMedia) return null;
      var canvas = this.getCanvas();
      return canvas && canvas.toDataURL(screenshotFormat, screenshotQuality);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var screenshotWidth = this.props.screenshotWidth;
      var hasUserMedia = this.state.hasUserMedia;
      var _this$video = this.video,
          clientWidth = _this$video.clientWidth,
          videoHeight = _this$video.videoHeight,
          videoWidth = _this$video.videoWidth;
      if (!hasUserMedia || !videoHeight) return null;

      if (!this.ctx) {
        var _canvas = document.createElement('canvas');

        var aspectRatio = videoWidth / videoHeight;
        var canvasWidth = screenshotWidth || clientWidth;
        _canvas.width = canvasWidth;
        _canvas.height = canvasWidth / aspectRatio;
        this.canvas = _canvas;
        this.ctx = _canvas.getContext('2d');
      }

      var ctx = this.ctx,
          canvas = this.canvas;
      ctx.drawImage(this.video, 0, 0, canvas.width, canvas.height);
      return canvas;
    }
  }, {
    key: "requestUserMedia",
    value: function requestUserMedia() {
      var _this2 = this;

      var _this$props4 = this.props,
          audio = _this$props4.audio,
          audioConstraints = _this$props4.audioConstraints,
          videoConstraints = _this$props4.videoConstraints;
      navigator.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      var sourceSelected = function sourceSelected(audioConstraints, videoConstraints) {
        // Request video
        var constraints = {
          video: videoConstraints || true
        }; // Request Audo

        if (audio) {
          constraints.audio = audioConstraints || true;
        }

        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          Webcam.mountedInstances.forEach(function () {
            return _this2.handleUserMedia(null, stream);
          });
        })["catch"](function (e) {
          Webcam.mountedInstances.forEach(function () {
            return _this2.handleUserMedia(e);
          });
        });
      };

      if ('mediaDevices' in navigator) {
        sourceSelected(audioConstraints, videoConstraints);
      } else {
        var optionalSource = function optionalSource(id) {
          return {
            optional: [{
              sourceId: id
            }]
          };
        };

        var constraintToSourceId = function constraintToSourceId(constraint) {
          var deviceId = (constraint || {}).deviceId;

          if (typeof deviceId === 'string') {
            return deviceId;
          } else if (Array.isArray(deviceId) && deviceId.length > 0) {
            return deviceId[0];
          } else if (_typeof(deviceId) === 'object' && deviceId.ideal) {
            return deviceId.ideal;
          }

          return null;
        };

        window.MediaStreamTrack.getSources(function (sources) {
          var audioSource = null;
          var videoSource = null;
          sources.forEach(function (source) {
            if (source.kind === 'audio') {
              audioSource = source.id;
            } else if (source.kind === 'video') {
              videoSource = source.id;
            }
          });
          var audioSourceId = constraintToSourceId(audioConstraints);

          if (audioSourceId) {
            audioSource = audioSourceId;
          }

          var videoSourceId = constraintToSourceId(videoConstraints);

          if (videoSourceId) {
            videoSource = videoSourceId;
          }

          sourceSelected(optionalSource(audioSource), optionalSource(videoSource));
        });
      }

      Webcam.userMediaRequested = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          audio = _this$props5.audio,
          className = _this$props5.className,
          height = _this$props5.height,
          style = _this$props5.style,
          width = _this$props5.width;
      var src = this.state.src;
      return /*#__PURE__*/React.createElement("video", {
        autoPlay: true,
        width: width,
        height: height,
        src: src,
        muted: audio,
        className: className,
        playsInline: true,
        style: style,
        ref: function ref(_ref) {
          _this3.video = _ref;
        }
      });
    }
  }]);

  return Webcam;
}(Component), _defineProperty(_class, "propTypes", {
  audio: bool,
  onUserMedia: func,
  onUserMediaError: func,
  height: oneOfType([number, string]),
  width: oneOfType([number, string]),
  screenshotFormat: oneOf(['image/webp', 'image/png', 'image/jpeg']),
  style: object,
  className: string,
  screenshotQuality: number,
  screenshotWidth: number // audioConstraints: audioConstraintType,
  // videoConstraints: videoConstraintType

}), _defineProperty(_class, "defaultProps", {
  audio: false,
  className: '',
  height: 463.5,
  onUserMedia: function onUserMedia() {},
  onUserMediaError: function onUserMediaError() {},
  screenshotFormat: 'image/webp',
  screenshotQuality: 0.8,
  // style: { borderRadius: '.5rem .5rem 0 0' },
  width: 824
}), _defineProperty(_class, "mountedInstances", []), _defineProperty(_class, "userMediaRequested", false), _temp));
Webcam.Design = Design;
export { Webcam }; // const constrainStringType = PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.arrayOf(PropTypes.string),
//   PropTypes.shape({
//     exact: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]),
//   }),
//   PropTypes.shape({
//     ideal: PropTypes.oneOfType([
//       PropTypes.string,
//       PropTypes.arrayOf(PropTypes.string),
//     ]),
//   }),
// ]);
// const constrainBooleanType = PropTypes.oneOfType([
//   PropTypes.shape({
//     exact: PropTypes.bool,
//   }),
//   PropTypes.shape({
//     ideal: PropTypes.bool,
//   }),
// ]);
// const constrainLongType = PropTypes.oneOfType([
//   PropTypes.number,
//   PropTypes.shape({
//     exact: PropTypes.number,
//     ideal: PropTypes.number,
//     min: PropTypes.number,
//     max: PropTypes.number,
//   }),
// ]);
// const constrainDoubleType = constrainLongType;
// const audioConstraintType = PropTypes.shape({
//   deviceId: constrainStringType,
//   groupId: constrainStringType,
//   autoGainControl: constrainBooleanType,
//   channelCount: constrainLongType,
//   latency: constrainDoubleType,
//   noiseSuppression: constrainBooleanType,
//   sampleRate: constrainLongType,
//   sampleSize: constrainLongType,
//   volume: constrainDoubleType,
// });
// const videoConstraintType = PropTypes.shape({
//   deviceId: constrainStringType,
//   groupId: constrainStringType,
//   aspectRatio: constrainDoubleType,
//   facingMode: constrainStringType,
//   frameRate: constrainDoubleType,
//   height: constrainLongType,
//   width: constrainLongType,
// });
//# sourceMappingURL=webcam.js.map