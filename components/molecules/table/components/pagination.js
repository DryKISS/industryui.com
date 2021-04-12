/**
 * Components - Molecules - Table - Pagination
 */

// React
import React, { memo } from 'react'
import { array, func, number } from 'prop-types'

// UI
import { Pagination } from '../../../'
import { Row } from '../../../atoms/'
import Select from 'react-select'

const Items = [
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: 'All', value: Infinity }
]
export const TablePagination = memo(
  ({
    currentPage,
    handlePagination,
    handlePaginationSize,
    paginationSize,
    pageCount,
    perPage,
    rows
  }) => {
    const pagineSizeChangeHandler = (size) => {
      handlePaginationSize(size.value)
    }

    return (
      <Row>
        <div style={{ width: '70%' }}>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePagination}
            pageCount={pageCount}
            showNextAndPrev
            size="sm"
          />
        </div>
        {paginationSize && (
          <div style={{ width: '30%' }}>
            <Select
              onChange={pagineSizeChangeHandler}
              options={Items}
              defaultValue={perPage && Items.find((size) => size.value === perPage)}
            />
          </div>
        )}
      </Row>
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
  perPage: 50
}
