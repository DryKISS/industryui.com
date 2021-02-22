import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Components - Molecules - Voice Rcorder
 */
// React
import React, { useEffect, useRef, useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { Close, Text, MicIcon, toHHMMSS } from '../../';
import { THEME_COLOUR } from '../../theme/variables/colour';
var AudioRecorder;
var mpegEncoder;
export var VoiceRecorder = function VoiceRecorder(_ref) {
  var onVoiceRecord = _ref.onVoiceRecord,
      overlayStyle = _ref.overlayStyle;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      recorderLoaded = _useState2[0],
      setRecorderLoaded = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1];

  var recorder = useRef();
  var timerInterval = useRef();
  var canSendData = useRef(true);

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isRecording = _useState6[0],
      setisRecording = _useState6[1];

  var loadModules = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return import('audio-recorder-polyfill');

            case 2:
              AudioRecorder = _context.sent["default"];
              _context.next = 5;
              return import('audio-recorder-polyfill/mpeg-encoder');

            case 5:
              mpegEncoder = _context.sent["default"];
              AudioRecorder.encoder = mpegEncoder;
              AudioRecorder.prototype.mimeType = 'audio/mpeg';

              if (window) {
                window.MediaRecorder = AudioRecorder;
              }

              setRecorderLoaded(true);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadModules() {
      return _ref2.apply(this, arguments);
    };
  }();

  useEffect(function () {
    loadModules();
    return function () {
      stopTimer();
    };
  }, []);

  var stopTimer = function stopTimer() {
    clearInterval(timerInterval.current);
    timerInterval.current = null;
    setTimer(0);
  };

  var handleStartRecord = function handleStartRecord() {
    window && window.navigator.mediaDevices.getUserMedia({
      audio: true
    }).then(function (stream) {
      recorder.current = new window.MediaRecorder(stream); // Set record to <audio> when recording will be finished

      recorder.current.addEventListener('dataavailable', function (e) {
        if (canSendData.current === true) {
          onVoiceRecord(e);
        } else {
          canSendData.current = true;
        }

        stopTimer();
      }); // Start recording

      recorder.current.start();
      timerInterval.current = setInterval(function () {
        setTimer(function (time) {
          return time + 1;
        });
      }, 1000);
      setisRecording(true);
    });
  };

  var handleStopRecord = function handleStopRecord() {
    recorder.current.stop(); // Remove "recording" icon from browser tab

    recorder.current.stream.getTracks().forEach(function (i) {
      return i.stop();
    });
    setisRecording(false);
    stopTimer();
  };

  var handleCancelRecord = function handleCancelRecord() {
    canSendData.current = false;
    handleStopRecord();
  };

  var showRecorder = function showRecorder(_ref3) {
    var onVoiceRecord = _ref3.onVoiceRecord,
        overlayStyle = _ref3.overlayStyle;
    if (!recorderLoaded) return /*#__PURE__*/React.createElement(MicIcon, {
      disabled: true
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OverLay, {
      isRecording: isRecording,
      style: overlayStyle
    }, isRecording && /*#__PURE__*/React.createElement(OverlayRecorderIconWrapper, null, /*#__PURE__*/React.createElement(MicIcon, {
      colour: THEME_COLOUR.success
    })), /*#__PURE__*/React.createElement(Text, {
      content: "Recording",
      context: "dark"
    }), /*#__PURE__*/React.createElement(Loader, null, /*#__PURE__*/React.createElement(Dot, null, "."), /*#__PURE__*/React.createElement(Dot, null, "."), /*#__PURE__*/React.createElement(Dot, null, ".")), /*#__PURE__*/React.createElement(TimerWrapper, null, toHHMMSS({
      sec: timer + '',
      hasMinute: true,
      hasSecond: true
    })), /*#__PURE__*/React.createElement(Close, {
      click: handleCancelRecord,
      context: "danger"
    })), /*#__PURE__*/React.createElement(Wrapper, {
      onClick: isRecording ? handleStopRecord : handleStartRecord
    }, isRecording ? /*#__PURE__*/React.createElement(StopIcon, null) : /*#__PURE__*/React.createElement(MicIcon, {
      hoverColour: true
    })));
  };

  return showRecorder({
    onVoiceRecord: onVoiceRecord,
    overlayStyle: overlayStyle
  });
};
var StopIcon = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 3px;\n  height: 1rem;\n  width: 1rem;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.danger;
});
var Dot = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
var Loader = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: -0.25rem;\n  @keyframes blink {\n    50% {\n      color: transparent;\n    }\n  }\n  span {\n    animation: 1s blink infinite;\n    font-size: 1.5rem;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 250ms;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 500ms;\n  }\n"])));
var OverlayRecorderIconWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n  margin-top: 0.5rem;\n"])));
var TimerWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  color: ", ";\n  flex: 1;\n  text-align: end;\n  padding-right: 1rem;\n"])), function (_ref5) {
  var VOICE_RECORDER = _ref5.theme.VOICE_RECORDER;
  return VOICE_RECORDER.timerColour;
});
var Wrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  height: 100%;\n  padding-left: 0.25rem;\n"])));
var OverLay = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  height: 45px;\n  left: 4rem;\n  overflow: hidden;\n  position: absolute;\n  top: -2px;\n  transition-property: padding-left, padding-right, width, opacity;\n  transition-duration: 0.3s;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 1;\n  ", "\n"])), function (_ref6) {
  var VOICE_RECORDER = _ref6.theme.VOICE_RECORDER;
  return VOICE_RECORDER.overlayBackground;
}, function (_ref7) {
  var isRecording = _ref7.isRecording;
  return css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    opacity: ", ";\n    padding-left: ", ";\n    padding-right: ", ";\n    width: ", ";\n  "])), isRecording ? '1' : '0', isRecording ? '1rem' : '0rem', isRecording ? '1rem' : '0rem', isRecording ? 'calc(100% - 8rem)' : '0px');
});
//# sourceMappingURL=voiceRecorder.js.map