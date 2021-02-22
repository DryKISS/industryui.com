import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Atoms - Date
 */
// React
import React from 'react';
import { oneOf, string } from 'prop-types'; // Size

import styled from 'styled-components'; // UI

import { THEME_SIZE } from '../../theme/constants/size';
export var Date = function Date(_ref) {
  var date = _ref.date,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(StyledTime, {
    dateTime: date,
    itemProp: "datePublished",
    pubdate: "pubdate",
    size: size
  }, date);
};
Date.displayName = "Date";
var StyledTime = styled.time(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var _theme$TEXT$FONT_SIZE, _theme$TEXT$LINE_HEIG;

  var size = _ref2.size,
      theme = _ref2.theme;
  return "\n    color: ".concat(theme.COLOUR.black, ";\n    font-size: ").concat((_theme$TEXT$FONT_SIZE = theme.TEXT.FONT_SIZE[size]) !== null && _theme$TEXT$FONT_SIZE !== void 0 ? _theme$TEXT$FONT_SIZE : '1rem', ";\n    line-height: ").concat((_theme$TEXT$LINE_HEIG = theme.TEXT.LINE_HEIGHT[size]) !== null && _theme$TEXT$LINE_HEIG !== void 0 ? _theme$TEXT$LINE_HEIG : '1rem', ";\n  ");
});
Date.propTypes = {
  date: string.isRequired,
  size: oneOf(Object.values(THEME_SIZE))
};
Date.defaultProps = {
  size: 'md'
};
//# sourceMappingURL=date.js.map