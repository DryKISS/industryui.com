import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Layout — Page
 */
// React
import React, { useContext } from 'react';
import { any, bool, node, oneOf, oneOfType, shape, string } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { ConfigContext } from '../../services/config/context';
import { Container } from '../../atoms/grid/components/Container';
import { MetaHead } from '../../meta/head';
import { PageHeading } from '../../molecules/pageHeading/pageHeading';
import { Space } from '../../atoms/space/space';
import { THEME_CONTEXT } from '../../theme/constants/context';
import { THEME_SIZE } from '../../theme/constants/size';
export var Page = function Page(_ref) {
  var children = _ref.children,
      fluid = _ref.fluid,
      meta = _ref.meta,
      padding = _ref.padding,
      pageHeading = _ref.pageHeading;

  var _useContext = useContext(ConfigContext),
      Brand = _useContext.Brand,
      Canonical = _useContext.Canonical;

  return /*#__PURE__*/React.createElement(StyledPage, null, padding && /*#__PURE__*/React.createElement(Space, {
    paddingTop: padding
  }), meta && /*#__PURE__*/React.createElement(MetaHead, {
    canonical: Canonical,
    brand: Brand.name,
    meta: meta
  }), /*#__PURE__*/React.createElement(Container, {
    fluid: fluid
  }, pageHeading && /*#__PURE__*/React.createElement(PageHeading, pageHeading), children), padding && /*#__PURE__*/React.createElement(Space, {
    paddingBottom: padding
  }));
};
Page.displayName = "Page";
var StyledPage = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.PAGE.backGroundColour;
});
Page.propTypes = {
  children: node.isRequired,
  fluid: bool,
  meta: shape({
    description: string.isRequired,
    path: string,
    title: string.isRequired
  }),
  padding: oneOfType([bool, oneOf(Object.values(THEME_SIZE))]),
  pageHeading: shape({
    center: bool,
    context: oneOf(Object.values(THEME_CONTEXT)),
    divider: bool,
    heading: any.isRequired,
    help: bool,
    helpContent: any,
    strapline: string
  })
};
Page.defaultProps = {
  fluid: false,
  padding: 'md'
};
//# sourceMappingURL=page.js.map