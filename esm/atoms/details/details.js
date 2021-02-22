import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

/**
 * Components - Details
 */
// React
import React from 'react'; // UI

import { Button } from '../../atoms';
import { DetailsPropTypes, DetailsDefaultProps } from './props'; // Style

import styled from 'styled-components';
export var Details = function Details(_ref) {
  var children = _ref.children,
      context = _ref.context,
      dataSet = _ref.dataSet,
      open = _ref.open,
      summary = _ref.summary,
      SummaryActionsComponent = _ref.SummaryActionsComponent,
      style = _ref.style,
      Toolbar = _ref.Toolbar,
      props = _objectWithoutProperties(_ref, ["children", "context", "dataSet", "open", "summary", "SummaryActionsComponent", "style", "Toolbar"]);

  return /*#__PURE__*/React.createElement(StyledDetails, _extends({
    context: context,
    open: open
  }, dataSet), /*#__PURE__*/React.createElement(StyledSummary, null, summary, props.button && /*#__PURE__*/React.createElement(StyledButton, {
    content: props.button || 'Add New',
    context: "secondary",
    onClick: props.handleClick,
    size: "sm"
  }), SummaryActionsComponent && /*#__PURE__*/React.createElement(ActionsWrapper, null, SummaryActionsComponent), Toolbar && /*#__PURE__*/React.createElement(Toolbar, null)), /*#__PURE__*/React.createElement(StyledBody, {
    style: style
  }, children));
};
Details.displayName = "Details";
var ActionsWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  float: right;\n  width: fit-content;\n"])));
var StyledDetails = styled.details(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-bottom: 1px solid ", ";\n  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;\n  margin-bottom: 0.5rem;\n"])), function (_ref2) {
  var context = _ref2.context,
      theme = _ref2.theme;
  return theme.COLOUR[context];
});
var StyledSummary = styled.summary(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n  padding: 1rem;\n  position: relative;\n"])));
var StyledButton = styled(Button)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  float: right;\n"])));
var StyledBody = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 1rem;\n  padding: 0 1rem 1rem;\n"])));
Details.propTypes = DetailsPropTypes;
Details.defaultProps = DetailsDefaultProps;
//# sourceMappingURL=details.js.map