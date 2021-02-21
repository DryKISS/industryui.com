import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";

var _templateObject;

/**
 * Card - CTA
 */
// React
import React from 'react';
import { func, string } from 'prop-types'; // UI

import { Button, Link } from '../../../';
import styled from 'styled-components';
export var CardCTA = function CardCTA(_ref) {
  var func = _ref.func,
      link = _ref.link,
      title = _ref.title;

  var CtaButton = function CtaButton(props) {
    return /*#__PURE__*/React.createElement(StyledButton, _extends({
      content: title,
      context: "secondary"
    }, props));
  };

  return link ? /*#__PURE__*/React.createElement(Link, {
    border: false,
    passHref: true,
    to: link
  }, /*#__PURE__*/React.createElement(CtaButton, null)) : /*#__PURE__*/React.createElement(CtaButton, {
    onClick: func
  });
};
var StyledButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  margin-top: 0.5rem;\n"])));
CardCTA.propTypes = {
  func: func,
  link: string,
  title: string
};
CardCTA.defaultProps = {
  title: 'Read more'
};
//# sourceMappingURL=cta.js.map