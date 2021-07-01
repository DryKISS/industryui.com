/**
 * Components - Molecules - Table - Wrapper
 */

// React
import React, { memo, useEffect, useRef } from 'react'

// Style
import styled from 'styled-components'

// UI
import TableContent from './components/table'
import TableLoading from './components/loading'
import TablePagination from './components/pagination'
import tableColumnCount from './components/utils/columnCount'

// Props
import { defaultProps, propTypes } from './components/props'

const Table = memo(
  ({
    align,
    border,
    caption,
    className,
    columns,
    fullHeight,
    hover,
    loading,
    noData,
    pagination,
    paginationSize,
    paginationProps,
    responsive,
    rowClick,
    rows,
    setSort,
    sort,
    striped
  }) => {
    const { currentPage, onPageChange, onPageSizeChange, pageCount, perPage = 50 }=paginationProps??{}
    const tableSpan = columns && tableColumnCount(columns)
    const tableRef = useRef(null)
    const tableReady = useRef(false)
    const rowLength = rows.length > 0

    useEffect(() => {
      const table = tableRef.current

      if (table && loading !== true && tableReady.current === false) {
        tableReady.current = true
      }

      return () => {}
    }, [rowLength])

    return (
      <StyledWrapper fullHeight={fullHeight} isLoading={loading} border={border}>
        <TableLoading colsLength={tableSpan} show={loading} />

        <StyledResponsive ref={tableRef} responsive={responsive}>
          <TableContent
            align={align}
            caption={caption}
            columns={columns}
            className={className}
            currentPage={ currentPage}
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
            paginationSize={paginationSize}
            handlePaginationSize={onPageSizeChange}
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
    `
      position: relative;
    `}
  ${({ border }) =>
    border === false &&
    `
      td,
      th {
        border: none !important;
      }
    `}
`

const StyledResponsive = styled.div`
  ${({ responsive }) =>
    responsive &&
    `
      background-color: #fff;
      display: block;
      overflow-x: auto;
      width: 100%;
    `}
`

Table.propTypes = propTypes
Table.defaultProps = defaultProps

export default Table
