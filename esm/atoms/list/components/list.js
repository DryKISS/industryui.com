import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * List
 */
// React
import React from 'react';
import { bool, node, object, string } from 'prop-types'; // Style

import styled, { css } from 'styled-components';
export var List = function List(_ref) {
  var border = _ref.border,
      children = _ref.children,
      className = _ref.className,
      flush = _ref.flush,
      inline = _ref.inline,
      group = _ref.group,
      style = _ref.style,
      unstyled = _ref.unstyled;

  var renderListItems = function renderListItems() {
    return React.Children.map(children, function (child) {
      return /*#__PURE__*/React.cloneElement(child, {
        border: border,
        flush: flush,
        group: group
      });
    });
  };

  return /*#__PURE__*/React.createElement(StyledList, {
    border: border,
    className: className,
    flush: flush,
    group: group,
    inline: inline,
    role: "list",
    style: style,
    unstyled: unstyled
  }, renderListItems());
};
List.displayName = "List";
var groupStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: -1px;\n"])));
var inlineStyles = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: inline-flex;\n"])));
var unstyledStyles = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  padding-left: 0;\n"])));
var StyledList = styled.ul(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), function (_ref2) {
  var group = _ref2.group;
  return group ? groupStyles : '';
}, function (_ref3) {
  var inline = _ref3.inline;
  return inline ? inlineStyles : '';
}, function (_ref4) {
  var unstyled = _ref4.unstyled,
      border = _ref4.border,
      group = _ref4.group,
      flush = _ref4.flush;
  return unstyled || border || flush || group ? unstyledStyles : '';
});
List.propTypes = {
  border: bool,
  children: node.isRequired,
  className: string,
  inline: bool,
  flush: bool,
  group: bool,
  style: object,
  unstyled: bool
};
List.defaultProps = {
  className: '',
  inline: false,
  group: false,
  unstyled: false
};
//# sourceMappingURL=list.js.map