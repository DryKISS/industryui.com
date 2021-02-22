/**
 * Components -Social - Facebook - Page Plugin
 *
 * - height: Min. is 70
 * - tabs: Tabs to render i.e. [timeline, events, messages]
 * - width: Min. is 180 & Max. is 500
 */
// React
import React from 'react';
import { bool, number, string } from 'prop-types';
var p = 'https://www.facebook.com/plugins/page.php';
export var FacebookPagePlugin = function FacebookPagePlugin(_ref) {
  var appId = _ref.appId,
      iFrame = _ref.iFrame,
      adaptContainerWidth = _ref.adaptContainerWidth,
      height = _ref.height,
      hideCover = _ref.hideCover,
      hideCta = _ref.hideCta,
      showFacepile = _ref.showFacepile,
      smallHeader = _ref.smallHeader,
      tabs = _ref.tabs,
      to = _ref.to,
      width = _ref.width;
  var url = "".concat(p, "?href=").concat(to, "&tabs=").concat(tabs, "&width=").concat(width, "&height=").concat(height, "\n    &small_header=").concat(smallHeader, " &adapt_container_width=").concat(adaptContainerWidth, "\n    &hide_cover=").concat(hideCover, "&show_facepile=").concat(showFacepile, "&appId=").concat(appId);
  return /*#__PURE__*/React.createElement(React.Fragment, null, iFrame && /*#__PURE__*/React.createElement("iframe", {
    allow: "encrypted-media",
    frameBorder: "0",
    height: height,
    scrolling: "no",
    src: url,
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    width: width
  }), !iFrame && /*#__PURE__*/React.createElement("div", {
    className: "fb-page",
    "data-adapt-container-width": "true",
    "data-height": "",
    "data-hide-cover": "false",
    "data-href": to,
    "data-layout": "button_count",
    "data-show-facepile": "true",
    "data-small-header": "false",
    "data-tabs": "timeline",
    "data-width": ""
  }, /*#__PURE__*/React.createElement("blockquote", {
    cite: "https://www.facebook.com/maitaidating/",
    className: "fb-xfbml-parse-ignore"
  }, /*#__PURE__*/React.createElement("a", {
    href: to
  }, "Mai Tai Dating"))));
};
FacebookPagePlugin.propTypes = {
  appId: number.isRequired,
  adaptContainerWidth: bool,
  height: number,
  hideCover: bool,
  hideCta: bool,
  iFrame: bool,
  showFacepile: bool,
  smallHeader: bool,
  tabs: string,
  to: string.isRequired,
  width: number
};
FacebookPagePlugin.defaultProps = {
  adaptContainerWidth: true,
  height: 500,
  hideCover: false,
  hideCta: false,
  iFrame: true,
  showFacepile: true,
  smallHeader: true,
  tabs: 'timeline,messages,events',
  width: 340
};
//# sourceMappingURL=pagePlugin.js.map