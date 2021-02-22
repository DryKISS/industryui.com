/**
 * Fancy
 */
// React
import React from 'react';
import { string } from 'prop-types'; // Next

import Head from 'next/head';
export var MetaFancy = function MetaFancy(_ref) {
  var category = _ref.category;
  return /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement("meta", {
    property: "fancy:category",
    content: category
  }));
};
MetaFancy.displayName = "MetaFancy";
MetaFancy.propTypes = {
  category: string.isRequired
};
//# sourceMappingURL=fancy.js.map