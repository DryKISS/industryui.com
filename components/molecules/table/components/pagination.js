/**
 * Components - Molecules - Table - Pagination
 */

// React
import React, { memo } from 'react'
import { func, number, oneOfType, string } from 'prop-types'

// UI
import Column from '../../../atoms/grid/Column'
import Pagination from '../../pagination/pagination'
import Row from '../../../atoms/grid/Row'
import TablePaginationSize from './paginationSize'

export const TablePagination = memo(
  ({ currentPage, handlePagination, handlePaginationSize, paginationSize, pageCount, perPage }) => {
    return (
      <Row>
        <Column sm={12} md={10}>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePagination}
            pageCount={pageCount}
            showNextAndPrev
            size="sm"
          />
        </Column>

        {paginationSize && (
          <Column sm={12} md={2}>
            <TablePaginationSize handlePaginationSize={handlePaginationSize} perPage={perPage} />
          </Column>
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
  perPage: oneOfType([number, string])
}

TablePagination.defaultProps = {
  currentPage: 1,
  perPage: 50
}

export default TablePagination
