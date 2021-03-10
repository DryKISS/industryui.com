/**
 * Components - Molecules - Table - Pagination
 */

// React
import React, { memo } from 'react'
import { array, func, number } from 'prop-types'

// UI
import { Pagination } from '../../../'

export const TablePagination = memo(
  ({ currentPage, handlePagination, pageCount, perPage, rows }) => (
    <Pagination
      currentPage={currentPage}
      onPageChange={handlePagination}
      pageCount={pageCount}
      showNextAndPrev
      size="sm"
    />
  )
)

TablePagination.propTypes = {
  currentPage: number,
  handlePagination: func,
  pageCount: number,
  perPage: number,
  rows: array.isRequired,
}

TablePagination.defaultProps = {
  currentPage: 1,
  perPage: 10,
}
