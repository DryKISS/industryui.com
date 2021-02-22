import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3;

// React
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; // Next

import dynamic from 'next/dynamic';
var AudioPlayer;
var RHAP_UI = {
  CURRENT_TIME: 'CURRENT_TIME',
  CURRENT_LEFT_TIME: 'CURRENT_LEFT_TIME',
  PROGRESS_BAR: 'PROGRESS_BAR',
  DURATION: 'DURATION',
  ADDITIONAL_CONTROLS: 'ADDITIONAL_CONTROLS',
  MAIN_CONTROLS: 'MAIN_CONTROLS',
  VOLUME_CONTROLS: 'VOLUME_CONTROLS',
  LOOP: 'LOOP',
  VOLUME: 'VOLUME'
};
export var MessagingAudioPlayer = function MessagingAudioPlayer(_ref) {
  var inMessage = _ref.inMessage,
      src = _ref.src;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      playerLoaded = _useState2[0],
      setPlayerLoaded = _useState2[1];

  useEffect(function () {
    AudioPlayer = dynamic(function () {
      return import('react-h5-audio-player');
    }, {
      ssr: false
    });
    setPlayerLoaded(true);
  }, []);

  var showPlayer = function showPlayer() {
    if (!playerLoaded) return /*#__PURE__*/React.createElement("div", null, "Loading ...");
    return /*#__PURE__*/React.createElement(AudioPlayer, {
      customProgressBarSection: inMessage ? [RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR, RHAP_UI.VOLUME, /*#__PURE__*/React.createElement(Spacer, {
        key: "rh1",
        style: {
          margin: '0 5px',
          width: '5px'
        }
      }), RHAP_UI.CURRENT_TIME, /*#__PURE__*/React.createElement(Slash, {
        key: "rh2"
      }, "/"), RHAP_UI.DURATION] : [RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR],
      customControlsSection: [],
      showJumpControls: false,
      showFilledVolume: true,
      src: src
    });
  };

  return /*#__PURE__*/React.createElement(Wrapper, null, showPlayer());
};
MessagingAudioPlayer.displayName = "MessagingAudioPlayer";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
var Spacer = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 5px;\n  width: 5px;\n"])));
var Slash = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
//# sourceMappingURL=index.js.map