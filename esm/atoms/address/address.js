/**
 * Components - Atoms - Address
 */
// React
import React from 'react';
import { string } from 'prop-types'; // UI

import { Text } from '../../';
export var Address = function Address(_ref) {
  var county = _ref.county,
      country = _ref.country,
      line1 = _ref.line1,
      line2 = _ref.line2,
      line3 = _ref.line3,
      postcode = _ref.postcode,
      town = _ref.town;
  return /*#__PURE__*/React.createElement("address", null, /*#__PURE__*/React.createElement(Text, null, line1), line2 && /*#__PURE__*/React.createElement(Text, null, line2), line3 && /*#__PURE__*/React.createElement(Text, null, line3), /*#__PURE__*/React.createElement(Text, null, town), county && /*#__PURE__*/React.createElement(Text, null, county), /*#__PURE__*/React.createElement(Text, null, postcode), /*#__PURE__*/React.createElement(Text, null, country));
};
Address.displayName = "Address";
Address.propTypes = {
  county: string,
  country: string,
  line1: string.isRequired,
  line2: string,
  line3: string,
  postcode: string.isRequired,
  town: string
};
//# sourceMappingURL=address.js.map