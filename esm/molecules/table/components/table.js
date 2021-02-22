import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules - Table
 */
// React
import React from 'react';
import { array, bool, func, number, oneOfType, shape, string } from 'prop-types'; // UI

import { TableCaption, TableColumns, TableData, TableRow, TableRows } from '../../../'; // Style

import styled from 'styled-components';
export var TableContent = function TableContent(_ref) {
  var align = _ref.align,
      caption = _ref.caption,
      className = _ref.className,
      columns = _ref.columns,
      hover = _ref.hover,
      loading = _ref.loading,
      noData = _ref.noData,
      rowClick = _ref.rowClick,
      rows = _ref.rows,
      sort = _ref.sort,
      setSort = _ref.setSort,
      striped = _ref.striped,
      tableSpan = _ref.tableSpan;
  var bottomCells = {
    data: [],
    hasData: false
  };
  columns.forEach(function (element) {
    if (element.bottomCell) {
      bottomCells.hasData = true;
      bottomCells.data.push(element);
    } else {
      bottomCells.data.push(null);
    }
  });
  return /*#__PURE__*/React.createElement(StyledTable, {
    className: className
  }, caption !== '' && /*#__PURE__*/React.createElement(TableCaption, null, caption), columns && /*#__PURE__*/React.createElement(TableColumns, {
    align: align,
    columns: columns,
    setSort: setSort,
    sort: sort
  }), /*#__PURE__*/React.createElement("tbody", null, noData && !loading && !rows.length ? /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableData, {
    align: "center",
    colSpan: tableSpan
  }, "No data available")) : /*#__PURE__*/React.createElement(TableRows, {
    align: align,
    bottomCells: bottomCells,
    columns: columns,
    hover: hover,
    rowClick: rowClick,
    rows: rows,
    striped: striped
  }), (bottomCells === null || bottomCells === void 0 ? void 0 : bottomCells.hasData) && /*#__PURE__*/React.createElement(TableRow, null, bottomCells.data.map(function (cell, j) {
    return /*#__PURE__*/React.createElement(TableData, {
      key: "bottom".concat(j)
    }, cell ? cell.bottomCell : '');
  }))));
};
TableContent.displayName = "TableContent";
var StyledTable = styled.table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-collapse: collapse;\n  font-size: ", ";\n  width: 100%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.TABLE.fontSize;
});
TableContent.propTypes = {
  align: oneOfType([string, bool]),
  caption: string,
  className: string,
  columns: array,
  hover: bool,
  loading: bool,
  noData: bool,
  rowClick: func,
  rows: array.isRequired,
  sort: shape({
    item: string,
    order: string
  }),
  setSort: func,
  striped: bool,
  tableSpan: number
};
TableContent.defaultProps = {
  align: false,
  columns: [],
  hover: true,
  loading: false,
  noData: true,
  sort: {},
  striped: true
};
//# sourceMappingURL=table.js.map