/**
 * Components - Molecules - Table - Pagination
 */

// React
import React, { memo } from 'react'
import { array, func, number } from 'prop-types'

// UI
import { Pagination } from '../../../'

import Select from 'react-select'

export const TablePagination = memo(
  ({ currentPage, handlePagination, handlePaginationSize, pageCount, perPage, rows }) => {
    const Items = [
      { label: '25', value: 25 },
      { label: '50', value: 50 },
      { label: '75', value: 75 },
      { label: '100', value: 100 }
    ]
    const pagineSizeChangeHandler = (size) => {
      handlePaginationSize(size.value)
    }

    return (
      <>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePagination}
          pageCount={pageCount}
          showNextAndPrev
          size="sm"
        />
        <Select onChange={pagineSizeChangeHandler} options={Items} />
      </>
    )
  }
)

TablePagination.propTypes = {
  currentPage: number,
  handlePagination: func,
  handlePaginationSize: func,
  pageCount: number,
  perPage: number,
  rows: array.isRequired
}

TablePagination.defaultProps = {
  currentPage: 1,
  perPage: 10
}
