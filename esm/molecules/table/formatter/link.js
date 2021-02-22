import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Table - Formatter - Link
 */
// React
import React from 'react';
import { object } from 'prop-types'; // Next

import Router from 'next/router'; // UI

import { StyledLink } from '../../../'; // Style

import styled from 'styled-components';
export var TableLink = function TableLink(path, key, value, dynamicUrl) {
  return function (_ref) {
    var row = _ref.row;
    var useLink = false;
    useLink = row[dynamicUrl] || path;

    var getPath = function getPath() {
      var url = row[dynamicUrl] || path;
      return "".concat(url, "?id=").concat(row[key]);
    };

    var handleClick = function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      Router.push(getPath());
    };

    var item = row[value];
    return useLink ? item !== '-' ? /*#__PURE__*/React.createElement(StyleLink, {
      border: false,
      href: getPath(),
      onClick: handleClick
    }, item) : '-' : item;
  };
};
var StyleLink = styled(StyledLink)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:hover {\n    background: #ddd;\n    margin: -8px;\n    padding: 8px;\n  }\n"])));
TableLink.propTypes = {
  row: object.isRequired
};
//# sourceMappingURL=link.js.map