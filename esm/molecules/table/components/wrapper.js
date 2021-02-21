import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Molecules - Table - Wrapper
 */
// React
import React, { memo } from 'react';
import { array, bool, func, number, oneOfType, shape, string } from 'prop-types'; // UI

import { TableContent, TableLoading, TablePagination } from '../../../';
import { tableColumnCount } from '../utils/columnCount'; // Style

import styled, { css } from 'styled-components';
export var Table = /*#__PURE__*/memo(function (_ref) {
  var align = _ref.align,
      caption = _ref.caption,
      className = _ref.className,
      columns = _ref.columns,
      fullHeight = _ref.fullHeight,
      hover = _ref.hover,
      loading = _ref.loading,
      noData = _ref.noData,
      pagination = _ref.pagination,
      _ref$paginationProps = _ref.paginationProps,
      currentPage = _ref$paginationProps.currentPage,
      onPageChange = _ref$paginationProps.onPageChange,
      pageCount = _ref$paginationProps.pageCount,
      _ref$paginationProps$ = _ref$paginationProps.perPage,
      perPage = _ref$paginationProps$ === void 0 ? 10 : _ref$paginationProps$,
      responsive = _ref.responsive,
      rowClick = _ref.rowClick,
      rows = _ref.rows,
      setSort = _ref.setSort,
      sort = _ref.sort,
      striped = _ref.striped;
  var tableSpan = tableColumnCount(columns);
  var rowLength = rows.length > 0;
  return /*#__PURE__*/React.createElement(StyledWrapper, {
    fullHeight: fullHeight,
    isLoading: loading
  }, /*#__PURE__*/React.createElement(TableLoading, {
    colsLength: tableSpan,
    show: loading
  }), /*#__PURE__*/React.createElement(StyledResponsive, {
    responsive: responsive
  }, /*#__PURE__*/React.createElement(TableContent, {
    align: align,
    caption: caption,
    columns: columns,
    className: className,
    currentPage: currentPage,
    hover: hover,
    loading: loading,
    pagination: pagination,
    perPage: perPage,
    rowClick: rowClick,
    rows: rows,
    sort: sort,
    setSort: setSort,
    striped: striped,
    tableSpan: tableSpan
  })), pagination && rowLength && /*#__PURE__*/React.createElement(TablePagination, {
    currentPage: currentPage,
    handlePagination: onPageChange,
    pageCount: pageCount,
    perPage: perPage,
    rows: rows
  }));
});
var StyledWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  ", "\n  position: relative;\n  width: 100%;\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.TABLE.background;
}, function (_ref3) {
  var fullHeight = _ref3.fullHeight,
      isLoading = _ref3.isLoading;
  return (fullHeight || isLoading !== undefined) && 'height: 100%;';
}, function (_ref4) {
  var isLoading = _ref4.isLoading;
  return isLoading && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: relative;\n    "])));
});
var StyledResponsive = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref5) {
  var responsive = _ref5.responsive;
  return responsive && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-color: #fff;\n      display: block;\n      overflow-x: auto;\n      width: 100%;\n    "])));
});
Table.propTypes = {
  align: oneOfType([string, bool]),
  caption: string,
  className: string,
  columns: array,
  fullHeight: bool,
  hover: bool,
  loading: bool,
  pagination: bool,
  paginationProps: shape({
    currentPage: number,
    onPageChange: func,
    perPage: number
  }),
  responsive: bool,
  rowClick: func,
  rows: array.isRequired,
  setSort: func,
  sort: shape({
    item: string,
    order: string
  }),
  striped: bool
};
Table.defaultProps = {
  align: false,
  columns: [],
  className: 'Table',
  fullHeight: false,
  hover: true,
  loading: undefined,
  noData: true,
  pagination: false,
  paginationProps: {},
  responsive: true,
  striped: true
};
//# sourceMappingURL=wrapper.js.map