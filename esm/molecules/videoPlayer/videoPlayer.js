import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Components - Molecules - Video Player
 */
// React
import React, { useRef, useState } from 'react';
import { any, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components'; // UI

import { PlayCircleIcon, fullScreen, FullScreenIcon, ResizeDetector } from '../../';
export var VideoPlayer = function VideoPlayer(_ref) {
  var src = _ref.src,
      poster = _ref.poster,
      className = _ref.className,
      videoProps = _ref.videoProps,
      videoType = _ref.videoType;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPlaying = _useState2[0],
      setIsPlaying = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  var videoRef = useRef();
  var played = useRef(false);

  var handlePlayPause = function handlePlayPause() {
    isPlaying === false ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(function (state) {
      return !state;
    });
  };

  var handlePaused = function handlePaused() {
    setIsPlaying(false);
  };

  var handlePlayed = function handlePlayed() {
    return played.current = true;
  };

  var handleFullScreen = function handleFullScreen() {
    videoRef.current.play();
    setIsPlaying(true);
    fullScreen.requestFullscreen(videoRef.current);
  };

  var handleResize = function handleResize(_ref2) {
    var width = _ref2.width;

    if (videoRef.current) {
      var _width = videoRef.current.clientWidth;
      setWidth(_width);
    }
  };

  var iconSize = width ? width / 6 : 40;
  return /*#__PURE__*/React.createElement(VideoPlayerWrapper, {
    className: className
  }, /*#__PURE__*/React.createElement(ResizeDetector, {
    onResize: handleResize
  }), /*#__PURE__*/React.createElement(Overlay, {
    show: !isPlaying,
    poster: played.current ? null : poster,
    gap: iconSize / 3
  }, /*#__PURE__*/React.createElement(PlayCircleIcon, {
    size: iconSize,
    hoverColour: true,
    onClick: handlePlayPause
  }), /*#__PURE__*/React.createElement(FullScreenIcon, {
    size: iconSize,
    hoverColour: true,
    onClick: handleFullScreen
  })), /*#__PURE__*/React.createElement(Video, _extends({
    ref: videoRef,
    controls: true,
    onPause: handlePaused,
    onPlay: handlePlayed
  }, videoProps), /*#__PURE__*/React.createElement("source", {
    src: src,
    type: videoType || 'video/mp4'
  }), "Your browser does not support the video tag."));
};
VideoPlayer.displayName = "VideoPlayer";
var Overlay = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background: rgba(0, 0, 0, 0.3);\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 0.5rem;\n  bottom: 7px;\n  display: flex;\n  gap: ", ";\n  justify-content: center;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: opacity 0.3s ease;\n  z-index: 1;\n  ", "\n"])), function (_ref3) {
  var poster = _ref3.poster;
  return poster && " linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(".concat(poster, ")");
}, function (_ref4) {
  var gap = _ref4.gap;
  return gap + 'px';
}, function (_ref5) {
  var show = _ref5.show;
  return show ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          opacity: 1;\n        "]))) : css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          opacity: 0;\n          pointer-events: none;\n        "])));
});
var VideoPlayerWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: 0.5rem;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n"])));
var Video = styled.video(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-radius: 0.5rem;\n  height: 100%;\n  outline: none;\n  width: 100%;\n"])));
VideoPlayer.prototypes = {
  className: string,
  poster: string,
  src: string.isRequired,
  videoProps: any,
  videoType: string
};
//# sourceMappingURL=videoPlayer.js.map