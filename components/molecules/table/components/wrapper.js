/**
 * Components - Molecules - Table - Wrapper
 */

// React
import React, { memo } from 'react'
import { array, bool, func, number, oneOfType, shape, string } from 'prop-types'

// UI
import { TableContent, TableLoading, TablePagination } from '../../../'
import { tableColumnCount } from '../utils/columnCount'

// Style
import styled, { css } from 'styled-components'

export const Table = memo(
  ({
    align,
    caption,
    className,
    columns,
    fullHeight,
    hover,
    loading,
    noData,
    pagination,
    paginationProps: { currentPage, onPageChange, pageCount, perPage = 10 },
    responsive,
    rowClick,
    rows,
    setSort,
    sort,
    striped
  }) => {
    const tableSpan = tableColumnCount(columns)
    const rowLength = rows.length > 0
    return (
      <StyledWrapper fullHeight={fullHeight} isLoading={loading}>
        <TableLoading colsLength={tableSpan} show={loading} />

        <StyledResponsive responsive={responsive}>
          <TableContent
            align={align}
            caption={caption}
            columns={columns}
            className={className}
            currentPage={currentPage}
            hover={hover}
            loading={loading}
            pagination={pagination}
            perPage={perPage}
            rowClick={rowClick}
            rows={rows}
            sort={sort}
            setSort={setSort}
            striped={striped}
            tableSpan={tableSpan}
          />
        </StyledResponsive>

        {pagination && rowLength && (
          <TablePagination
            currentPage={currentPage}
            handlePagination={onPageChange}
            pageCount={pageCount}
            perPage={perPage}
            rows={rows}
          />
        )}
      </StyledWrapper>
    )
  }
)

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.TABLE.background};
  ${({ fullHeight, isLoading }) => (fullHeight || isLoading !== undefined) && 'height: 100%;'}
  position: relative;
  width: 100%;
  ${({ isLoading }) =>
    isLoading &&
    css`
      position: relative;
    `}
`

const StyledResponsive = styled.div`
  ${({ responsive }) =>
    responsive &&
    css`
      background-color: #fff;
      display: block;
      overflow-x: auto;
      width: 100%;
    `}
`

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
}

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
}
