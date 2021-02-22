/**
 * Components - Social - Facebook - Share Button
 */
// React
import React from 'react';
import { bool, number, oneOf, string } from 'prop-types';
var p = 'https://www.facebook.com/plugins/share_button.php';
export var FacebookShareButton = function FacebookShareButton(_ref) {
  var appId = _ref.appId,
      hashTag = _ref.hashTag,
      iFrame = _ref.iFrame,
      layout = _ref.layout,
      size = _ref.size,
      to = _ref.to;
  return /*#__PURE__*/React.createElement(React.Fragment, null, iFrame && /*#__PURE__*/React.createElement("iframe", {
    allow: "encrypted-media",
    frameBorder: "0",
    height: "29",
    scrolling: "no",
    src: "".concat(p, "?href=").concat(to, "&layout=").concat(layout, "&size=").concat(size, "&appId=").concat(appId, "&width=104&height=30"),
    style: {
      border: 'none',
      overflow: 'hidden'
    },
    width: "104"
  }), !iFrame && /*#__PURE__*/React.createElement("div", {
    className: "fb-share-button",
    "data-hashtag": hashTag,
    "data-href": to,
    "data-layout": layout,
    "data-size": size
  }, /*#__PURE__*/React.createElement("a", {
    className: "fb-xfbml-parse-ignore",
    href: "https://www.facebook.com/sharer/sharer.php?u=".concat(to, "&src=sdkprepars"),
    rel: "noopener noreferrer",
    target: "_blank"
  }, ' ')));
};
FacebookShareButton.propTypes = {
  appId: number.isRequired,
  hashTag: string,
  iFrame: bool,
  layout: oneOf(['box_count', 'button', 'button_count', 'icon_link']),
  size: oneOf(['large', 'small']),
  to: string.isRequired
};
FacebookShareButton.defaultProps = {
  iFrame: true,
  layout: 'button',
  size: 'large'
};
//# sourceMappingURL=shareButton.js.map