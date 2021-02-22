import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2;

/**
 * Media Query
 *
 * Usage
 * const Container = styled.div`
 *   color: #333;
 *   ${MEDIA_QUERY.desktop`padding: 0 20px;`}
 *   ${MEDIA_QUERY.tablet`padding: 0 10px;`}
 *   ${MEDIA_QUERY.phone`padding: 0 5px;`}
 * `
 */
import { css } from 'styled-components';
var sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};
export var MEDIA_QUERY = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    @media (min-width: ", "em) {\n      ", "\n    }\n  "])), emSize, css.apply(void 0, arguments));
  };

  return accumulator;
}, {});
export var MEDIA_QUERY_MAX = Object.keys(sizes).reduce(function (accumulator, label) {
  var emSize = sizes[label] / 16;

  accumulator[label] = function () {
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      @media (max-width: ", "em) {\n        ", "\n      }\n    "])), emSize, css.apply(void 0, arguments));
  };

  return accumulator;
}, {});
//# sourceMappingURL=mediaQueries.js.map