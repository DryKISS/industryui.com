/**
 * Webcam design
 */
// React
import React from 'react'; // UI

import { Icon, Webcam } from '../../../';
export var Design = function Design(_ref) {
  var handleReset = _ref.handleReset,
      handleScreenshot = _ref.handleScreenshot,
      refProp = _ref.refProp,
      screenshot = _ref.screenshot,
      videoConstraints = _ref.videoConstraints;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-center",
    style: {
      background: '#000',
      border: '1px solid #C8D1D8',
      borderRadius: '.5rem .5rem 0 0',
      marginBottom: '-8px'
    }
  }, !screenshot && /*#__PURE__*/React.createElement(Webcam, {
    ref: refProp,
    screenshotFormat: "image/jpeg",
    videoConstraints: videoConstraints
  }), screenshot && /*#__PURE__*/React.createElement("img", {
    alt: "user photo",
    src: screenshot,
    style: {
      borderRadius: '.5rem .5rem 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#C8D1D8',
      borderRadius: '0 0 .5rem .5rem',
      height: '50px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: screenshot ? handleReset : handleScreenshot,
    style: {
      background: "".concat(!screenshot ? '#04d4cd' : '#e60811'),
      border: '2px solid #FFF',
      borderRadius: '50%',
      bottom: '50%',
      cursor: 'pointer',
      height: '50px',
      left: '50%',
      lineHeight: '50px',
      position: 'absolute',
      textAlign: 'center',
      width: '50px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    color: "white",
    icon: "camera",
    style: {
      fontSize: '1.5rem'
    }
  }))));
};
//# sourceMappingURL=design.js.map