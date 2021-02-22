/**
 * Components - Molecules - Table - Pagination
 */
// React
import React, { memo } from 'react';
import { array, func, number } from 'prop-types'; // UI

import { Pagination } from '../../../';
export var TablePagination = /*#__PURE__*/memo(function (_ref) {
  var currentPage = _ref.currentPage,
      handlePagination = _ref.handlePagination,
      pageCount = _ref.pageCount,
      perPage = _ref.perPage,
      rows = _ref.rows;
  return /*#__PURE__*/React.createElement(Pagination, {
    currentPage: currentPage,
    onPageChange: handlePagination,
    pageCount: pageCount,
    showNextAndPrev: true,
    size: "sm"
  });
});
TablePagination.propTypes = {
  currentPage: number,
  handlePagination: func,
  pageCount: number,
  perPage: number,
  rows: array.isRequired
};
TablePagination.defaultProps = {
  currentPage: 1,
  perPage: 10
};
//# sourceMappingURL=pagination.js.map