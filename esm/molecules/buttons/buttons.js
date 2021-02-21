/**
 * Buttons
 * Provides a stepped flow for buttons
 */
// React
import React from 'react';
import { bool, object, oneOfType, string } from 'prop-types'; // UI

import { Button, Divider, Link } from '../../';
export var Buttons = function Buttons(_ref) {
  var back = _ref.back,
      backText = _ref.backText,
      next = _ref.next,
      nextDisabled = _ref.nextDisabled,
      nextText = _ref.nextText,
      pathBack = _ref.pathBack,
      pathNext = _ref.pathNext;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, {
    size: "sm"
  }), back && /*#__PURE__*/React.createElement(Link, {
    to: pathBack
  }, /*#__PURE__*/React.createElement(Button, {
    context: "secondary",
    size: "lg"
  }, backText)), next && /*#__PURE__*/React.createElement("div", {
    className: "float-right"
  }, pathNext && /*#__PURE__*/React.createElement(Link, {
    to: pathNext
  }, /*#__PURE__*/React.createElement(Button, {
    context: "primary",
    size: "lg"
  }, nextText)), !pathNext && /*#__PURE__*/React.createElement(Button, {
    context: "primary",
    disabled: nextDisabled,
    size: "lg",
    type: "submit"
  }, nextText)), /*#__PURE__*/React.createElement("div", {
    style: {
      clear: 'both',
      marginBottom: '1rem'
    }
  }));
};
Buttons.propTypes = {
  back: bool,
  backText: string,
  next: bool,
  nextDisabled: bool,
  nextText: string,
  pathBack: oneOfType([object, string]),
  pathNext: string
};
Buttons.defaultProps = {
  backText: 'Back',
  nextText: 'Next'
};
//# sourceMappingURL=buttons.js.map