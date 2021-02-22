/**
 * Components - Formatters - Details Text
 */
// React
import React from 'react';
import { node, oneOfType, string } from 'prop-types'; // UI

import { Space } from '../space/space';
import { Text } from '../text/text';
export var DetailsText = function DetailsText(_ref) {
  var content = _ref.content,
      text = _ref.text;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, {
    marginBottom: "sm"
  }), /*#__PURE__*/React.createElement(Text, {
    content: content,
    context: "dark",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Text, null, text));
};
DetailsText.propTypes = {
  content: string.isRequired,
  text: oneOfType([node, string]).isRequired
};
//# sourceMappingURL=detailsText.js.map