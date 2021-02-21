import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

/**
 * Copyright
 */
// React
import React, { memo, useContext } from 'react';
import { array, bool, oneOf, shape, string } from 'prop-types'; // UI

import { Column, ConfigContext, Container, Icon, Link, Row } from '../../';
import { THEME_CONTEXT } from '../../theme/constants/context'; // Style

import styled, { css } from 'styled-components';
var year = new Date().getFullYear();
export var Copyright = /*#__PURE__*/memo(function (_ref) {
  var fixed = _ref.fixed,
      icon = _ref.icon,
      links = _ref.links;

  var _useContext = useContext(ConfigContext),
      Brand = _useContext.Brand;

  var renderLinks = function renderLinks() {
    return links.map(function (_ref2, index) {
      var name = _ref2.name,
          to = _ref2.to;
      return /*#__PURE__*/React.createElement(Link, {
        key: index,
        passHref: true,
        to: to
      }, /*#__PURE__*/React.createElement(StyledLink, null, name));
    });
  };

  return /*#__PURE__*/React.createElement(StyledCopyright, {
    fixed: fixed,
    "data-cy": "copyright"
  }, /*#__PURE__*/React.createElement(StyledContainer, null, /*#__PURE__*/React.createElement(StyledRow, null, /*#__PURE__*/React.createElement(Column, {
    md: links.length > 0 ? 3 : 12
  }, /*#__PURE__*/React.createElement(StyledIcon, icon), year, " \u2014 ", Brand.name), links.length > 0 && /*#__PURE__*/React.createElement(StyledColumn, {
    md: 9
  }, renderLinks()))));
});
var StyledCopyright = styled.section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  font-size: 0.75rem;\n  height: 3.5rem;\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.COPYRIGHT.background;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.COPYRIGHT.colour;
}, function (_ref5) {
  var fixed = _ref5.fixed;
  return fixed && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      bottom: 0;\n      position: fixed;\n      left: 0;\n      width: 100%;\n      z-index: 1;\n    "])));
});
var StyledContainer = styled(Container)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n"])));
var StyledRow = styled(Row)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
var StyledColumn = styled(Column)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"])));
var StyledIcon = styled(Icon)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: auto 0;\n  padding-right: 0.25rem;\n"])));
var StyledLink = styled.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-right: 1.5rem;\n"])));
Copyright.propTypes = {
  fixed: bool,
  icon: shape({
    context: oneOf(Object.values(THEME_CONTEXT)),
    icon: string,
    prefix: string
  }),
  links: array
};
Copyright.defaultProps = {
  fixed: false,
  icon: {
    context: 'primary',
    icon: 'copyright',
    prefix: 'fas'
  },
  links: []
};
//# sourceMappingURL=copyright.js.map