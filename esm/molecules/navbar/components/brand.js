import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Navbar — Brand
 * Adds the client logo if required to the left of the Navbar
 */
// React
import React from 'react';
import { string } from 'prop-types'; // UI

import { Image, Link } from '../../../'; // Style

import styled from 'styled-components';
export var Brand = function Brand(_ref) {
  var brand = _ref.brand;
  return /*#__PURE__*/React.createElement(StyledLink, {
    border: false,
    to: "/",
    passHref: true
  }, /*#__PURE__*/React.createElement(Image, {
    alt: "Logo",
    draggable: "false",
    src: brand,
    "data-cy": "navBrand"
  }));
};
Brand.displayName = "Brand";
var StyledLink = styled(Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n"])));
Brand.propTypes = {
  brand: string.isRequired
};
//# sourceMappingURL=brand.js.map