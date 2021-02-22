/**
 * Blog - Media
 * Showcases some direct links added in the translations
 */
// React
import React from 'react';
import { array, object } from 'prop-types'; // UI

import { BlogList, BlogSection } from './components';
export var BlogMedia = function BlogMedia(_ref) {
  var config = _ref.config,
      media = _ref.media;
  return /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Media"
  }, /*#__PURE__*/React.createElement(BlogList, {
    config: config,
    list: media
  }));
};
BlogMedia.displayName = "BlogMedia";
BlogMedia.propTypes = {
  config: object.isRequired,
  media: array.isRequired
};
//# sourceMappingURL=media.js.map