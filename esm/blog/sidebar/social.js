/**
 * Blog - Social
 */
// React
import React from 'react';
import { bool, object } from 'prop-types'; // UI

import { FacebookPagePlugin } from '../../';
import { BlogSection } from './components';
export var BlogSocial = function BlogSocial(_ref) {
  var facebook = _ref.facebook,
      instagram = _ref.instagram,
      twitter = _ref.twitter;
  return /*#__PURE__*/React.createElement(React.Fragment, null, facebook && /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Facebook"
  }, /*#__PURE__*/React.createElement(FacebookPagePlugin, {
    appId: facebook.appId,
    to: facebook.appPath,
    width: 349
  })), instagram && /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Instagram"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://lightwidget.com/widgets/ff03b23658a55244989ab894695973f9.html",
    scrolling: "no",
    style: {
      width: '100%',
      border: '0',
      overflow: 'hidden'
    }
  })), twitter && /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Twitter"
  }));
};
BlogSocial.propTypes = {
  facebook: object,
  instagram: bool,
  twitter: bool
};
BlogSocial.defaultProps = {
  instagram: false,
  twitter: false
};
//# sourceMappingURL=social.js.map