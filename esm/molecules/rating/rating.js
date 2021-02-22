import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Rating
 */
// React
import React from 'react';
import { number, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { themeBackground } from '../../theme/utils/background';
export var Rating = function Rating(_ref) {
  var className = _ref.className,
      context = _ref.context,
      value = _ref.value,
      size = _ref.size;
  var rating = [];

  for (var i = 0; i < size; i++) {
    rating.push( /*#__PURE__*/React.createElement(StyledRating, {
      active: i + 1 <= value,
      className: className,
      context: context,
      key: i
    }));
  }

  return rating;
};
var StyledRating = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  border-radius: 0.25rem;\n  display: inline-block;\n  height: 15px;\n  margin-right: 0.25rem;\n  width: 15px;\n  ", "\n"])), function (props) {
  return themeBackground(props);
}, function (_ref2) {
  var active = _ref2.active;
  return !active && 'opacity: 0.5;';
});
Rating.propTypes = {
  className: string,
  context: string,
  value: number.isRequired,
  size: number
};
Rating.defaultProps = {
  context: 'primary',
  size: 5
};
//# sourceMappingURL=rating.js.map