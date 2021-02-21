/**
 * Blog - Promo
 */
// React
import React from 'react';
import { string } from 'prop-types'; // UI

import { Image } from '../../';
import { BlogSection } from './components';
export var BlogPromo = function BlogPromo(_ref) {
  var src = _ref.src,
      to = _ref.to;
  return /*#__PURE__*/React.createElement(BlogSection, {
    heading: "Promo"
  }, /*#__PURE__*/React.createElement(Image, {
    alt: "Image",
    src: src
  }));
};
BlogPromo.displayName = "BlogPromo";
BlogPromo.propTypes = {
  src: string.isRequired,
  to: string.isRequired
};
//# sourceMappingURL=promo.js.map