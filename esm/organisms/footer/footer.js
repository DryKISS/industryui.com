import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

/**
 * Footer
 */
// React
import React, { Fragment } from 'react';
import { arrayOf, bool, func, number, object, oneOfType, shape, string } from 'prop-types'; // UI

import { Column, Container, Heading, Icon, Link, List, ListItem, Row } from '../../'; // Style

import styled, { css } from 'styled-components';
export var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      fixed = _ref.fixed;

  var renderColumns = function renderColumns() {
    return columns.map(function (column, index) {
      return /*#__PURE__*/React.createElement(Column, _extends({
        align: column.align,
        key: index,
        offset: column.offset
      }, column.size), Object.entries(column).forEach(function (_ref2, i) {
        var _ref3 = _slicedToArray(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        switch (key) {
          case 'header':
            return /*#__PURE__*/React.createElement(StyledHeading, {
              align: value.align,
              content: value.content,
              context: value.context,
              key: "".concat(value.content).concat(index).concat(i),
              tag: "h6"
            });

          case 'formatter':
            return value("".concat(index).concat(i));

          case 'links':
            return renderLinks(value, "".concat(index).concat(i));

          case 'text':
            return renderText(value, "".concat(index).concat(i));
        }
      }));
    });
  };

  var renderLinks = function renderLinks(_ref4, index) {
    var align = _ref4.align,
        border = _ref4.border,
        context = _ref4.context,
        direction = _ref4.direction,
        items = _ref4.items;
    return /*#__PURE__*/React.createElement(StyledList, {
      align: align,
      direction: direction,
      key: "".concat(items[0]).concat(index),
      unstyled: true
    }, items.map(function (_ref5) {
      var icon = _ref5.icon,
          iconPrefix = _ref5.iconPrefix,
          id = _ref5.id,
          name = _ref5.name,
          to = _ref5.to;
      return /*#__PURE__*/React.createElement(StyledListItem, {
        key: id
      }, /*#__PURE__*/React.createElement(Link, {
        border: border,
        context: context,
        to: to,
        passHref: true
      }, icon && /*#__PURE__*/React.createElement(StyledIcon, {
        context: "primary",
        icon: icon,
        prefix: iconPrefix
      }), name));
    }));
  };

  var renderText = function renderText(_ref6, index) {
    var align = _ref6.align,
        items = _ref6.items;
    return /*#__PURE__*/React.createElement(Fragment, {
      key: index
    }, items === null || items === void 0 ? void 0 : items.map(function (_ref7, i) {
      var content = _ref7.content,
          icon = _ref7.icon;
      return /*#__PURE__*/React.createElement(Fragment, {
        key: i
      }, icon && /*#__PURE__*/React.createElement(StyledIcon, {
        context: "primary",
        icon: icon
      }), /*#__PURE__*/React.createElement(StyledText, {
        align: align,
        dangerouslySetInnerHTML: {
          __html: content
        }
      }));
    }));
  };

  return /*#__PURE__*/React.createElement(StyledFooter, {
    "data-cy": "footer",
    fixed: fixed
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Row, null, renderColumns())));
};
Footer.displayName = "Footer";
var StyledFooter = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-top: 2px solid ", ";\n  font-size: 0.875rem;\n  ", "\n  padding-top: 2rem;\n  ", "\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.primary;
}, function (_ref9) {
  var FOOTER = _ref9.theme.FOOTER;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n  "])), FOOTER.background, FOOTER.colour);
}, function (_ref10) {
  var fixed = _ref10.fixed;
  return fixed && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      bottom: 0;\n      position: fixed;\n      left: 0;\n      width: 100%;\n      z-index: 1;\n    "])));
});
var StyledHeading = styled(Heading)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-align: ", ";\n"])), function (_ref11) {
  var align = _ref11.align;
  return align;
});
var StyledList = styled(List)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: ", ";\n  flex-wrap: wrap;\n  justify-content: ", ";\n"])), function (_ref12) {
  var direction = _ref12.direction;
  return direction || 'column';
}, function (_ref13) {
  var align = _ref13.align;
  return align;
});
var StyledListItem = styled(ListItem)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-bottom: 1.25rem;\n  padding-right: 1rem;\n"])));
var StyledIcon = styled(Icon)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0 0.5rem 0 0;\n"])));
var StyledText = styled.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 0 0 1rem;\n  text-align: ", ";\n"])), function (_ref14) {
  var align = _ref14.align;
  return align;
});
Footer.propTypes = {
  columns: arrayOf(shape({
    header: shape({
      align: string,
      content: string
    }),
    formatter: func,
    links: shape({
      align: string,
      items: arrayOf(shape({
        id: string,
        icon: string,
        name: string,
        to: oneOfType([object, string])
      }))
    }),
    offset: shape({
      sm: number,
      md: number,
      lg: number,
      xl: number
    }),
    size: shape({
      sm: number,
      md: number,
      lg: number,
      xl: number
    }),
    style: object
  })).isRequired,
  fixed: bool
};
Footer.defaultProps = {
  fixed: false
};
//# sourceMappingURL=footer.js.map