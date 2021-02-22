import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Atoms - Space - Style
 */
// Style
import { css } from 'styled-components'; // UI

import { MEDIA_QUERY } from '../../';
var sizes = {
  xxsSize: '0.25rem',
  xsSize: '0.5rem',
  smSize: '0.75rem',
  mdSize: '1rem',
  lgSize: '1.5rem',
  xlSize: '2rem',
  xxlSize: '2.5rem',
  xxxlSize: '3rem'
};
export var spaceStyler = function spaceStyler(properties) {
  var stl = '';
  var counter = 0;
  properties.forEach(function (property) {
    if (property.v) {
      counter++;
      stl += "".concat(property.k, ": ").concat(sizes[property.v + 'Size'], ";\n      ").concat(MEDIA_QUERY.desktop(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        ", ": calc(", " * 2);"])), property.k, sizes[property.v + 'Size']), "\n      ");
    }
  });

  if (counter === 0) {
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-bottom: ", ";\n      ", "\n    "])), sizes.mdSize, MEDIA_QUERY.desktop(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-bottom: calc(", " * 2);"])), sizes.mdSize));
  }

  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n  "])), stl);
};
//# sourceMappingURL=style.js.map