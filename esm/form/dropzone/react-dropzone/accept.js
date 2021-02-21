/**
 * Dropzone - Accept
 * Text to explain what is acceptable to upload
 *
 * @see https://github.com/react-dropzone/react-dropzone/tree/master/examples/accept
 */
// React
import React from 'react';
import { string } from 'prop-types';
export var Accept = function Accept(_ref) {
  var accept = _ref.accept;
  var files = accept.replace(/,/g, ' and ');
  return /*#__PURE__*/React.createElement("em", null, "(Only ", files, " will be accepted)");
};
Accept.displayName = "Accept";
Accept.propTypes = {
  accept: string.isRequired
};
Accept.defaultProps = {
  accept: 'image/jpeg,image/png'
};
//# sourceMappingURL=accept.js.map