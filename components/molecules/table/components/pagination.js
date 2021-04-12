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

// Style
import styled from 'styled-components'

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
        <StyledDivision width={paginationSize ? '70%' : '100%'}>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePagination}
            pageCount={pageCount}
            showNextAndPrev
            size="sm"
          />
        </StyledDivision>
        {paginationSize && (
          <StyledDivision width="30%" paddingRight={30}>
            <Select
              onChange={pagineSizeChangeHandler}
              options={Items}
              defaultValue={perPage && Items.find((size) => size.value === perPage)}
            />
          </StyledDivision>
        )}
      </Row>
    )
  }
)
const StyledDivision = ({ width, paddingRight, children }) => {
  const StyledWrapper = styled.div`
    width: ${width};
    padding-right: ${paddingRight}px;
    padding-bottom: 5px;
  `
  return <StyledWrapper>{children}</StyledWrapper>
}
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
