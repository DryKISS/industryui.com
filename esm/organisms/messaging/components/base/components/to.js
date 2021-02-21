import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Messaging/Base/To
 */
// React
import React from 'react';
import { string } from 'prop-types'; // UI

import { Image } from '../../../../../'; // Style

import styled from 'styled-components';
export var MessageTo = function MessageTo(_ref) {
  var to = _ref.to;
  var icon = '';

  switch (to) {
    case 'customer-supplier':
      icon = '/messaging/cs.svg';
      break;

    case 'customer':
      icon = '/messaging/customer.svg';
      break;

    case 'supplier':
      icon = '/messaging/supplier.svg';
      break;

    default:
      icon = null;
      break;
  }

  return icon && /*#__PURE__*/React.createElement(StyledImage, {
    alt: "audience",
    src: icon
  });
};
var StyledImage = styled(Image)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-right: 0.5rem;\n  vertical-align: middle !important;\n"])));
MessageTo.propTypes = {
  to: string.isRequired
};
//# sourceMappingURL=to.js.map