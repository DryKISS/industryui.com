import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Accordion
 */
// React
import React, { useState, Children, cloneElement } from 'react';
import { array, node, object, string, bool } from 'prop-types'; // Style

import styled from 'styled-components'; // UI

import { AccordionItem } from '../../';

var renderItem = function renderItem(_ref, index, current, handleCurrent) {
  var body = _ref.body,
      context = _ref.context,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(AccordionItem, {
    key: index,
    context: context,
    open: current.includes(index),
    title: title,
    handleOpen: function handleOpen() {
      return handleCurrent(index);
    }
  }, body);
};

renderItem.displayName = "renderItem";

var Body = function Body(_ref2) {
  var children = _ref2.children,
      data = _ref2.data,
      closeOthersOnOpen = _ref2.closeOthersOnOpen;
  var initialOpen = children ? children.findIndex(function (_) {
    return _.props.open;
  }) : data.findIndex(function (_) {
    return _.open;
  });

  var _useState = useState(initialOpen > -1 ? [initialOpen] : []),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var handleCurrent = function handleCurrent(index) {
    setCurrent(function (prev) {
      var temp = [];

      if (closeOthersOnOpen && !prev.includes(index)) {
        temp = [index];
      } else {
        if (prev.includes(index)) temp = prev.filter(function (_) {
          return _ !== index;
        });else temp = [].concat(_toConsumableArray(prev), [index]);
      }

      return temp;
    });
  };

  var map = [];

  if (children) {
    map = Children.map(children, function (child, index) {
      return /*#__PURE__*/cloneElement(child, {
        index: index,
        key: index,
        open: current.includes(index),
        handleOpen: function handleOpen(index) {
          return handleCurrent(index);
        }
      });
    });
  } else {
    map = data.map(function (item, index) {
      return renderItem(item, index, current, handleCurrent, index);
    });
  }

  return map;
};

export var Accordion = function Accordion(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      data = _ref3.data,
      style = _ref3.style,
      closeOthersOnOpen = _ref3.closeOthersOnOpen;
  return /*#__PURE__*/React.createElement(StyledAccordion, {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Body, {
    children: children,
    data: data,
    closeOthersOnOpen: closeOthersOnOpen
  }));
};
Accordion.displayName = "Accordion";
var StyledAccordion = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n"])));
Accordion.propTypes = {
  children: node,
  className: string,
  closeOthersOnOpen: bool,
  data: array,
  style: object
};
//# sourceMappingURL=accordion.js.map