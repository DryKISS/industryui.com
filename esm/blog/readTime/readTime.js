/**
 * Blog - Read Time
 */
// React
import React from 'react';
import { number } from 'prop-types'; // UI

import { Text } from '../../atoms/text/text';
export var BlogReadTime = function BlogReadTime(_ref) {
  var time = _ref.time;
  return /*#__PURE__*/React.createElement(Text, null, "Read time: ", time, " min(s)");
};
BlogReadTime.displayName = "BlogReadTime";
BlogReadTime.propTypes = {
  time: number.isRequired
};
//# sourceMappingURL=readTime.js.map