/**
 * Table
 */

// React
import { useState } from 'react'
import { array, bool, func, number, shape, string } from 'prop-types'

// UI
import {
  historyPush,
  Icon,
  Pagination,
  TableData,
  TableHead,
  TableLoading,
  TableRow
} from '../../../'

import { PaginationPropTypes } from '../../pagination/components/props'

// Style
import styled, { css } from 'styled-components'

export const Table = ({
  align,
  caption,
  className,
  columns,
  fullHeight,
  hover,
  loading,
  noData,
  pagination,
  paginationProps: {
    changeUrlOnChange = false,
    initialPage = 1,
    perPage = 10,
    ...otherPaginationProps
  },
  responsive,
  rowClick,
  rows,
  sort,
  setSort,
  striped
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const tableSpan = columns.filter(c => !c.hidden).length

  const handleClick = e => {
    e.preventDefault()
    const row = e.currentTarget.getAttribute('data-item')
    rowClick(JSON.parse(row))
  }

  const handlePagination = page => {
    if (changeUrlOnChange) historyPush(`?page=${page}`)
    setCurrentPage(page)
  }

  const renderColumns = () => {
    return columns.map(({ hidden, sortable, sortName = '', text }, index) => {
      if (hidden) {
        return
      }

      const hasSort = sort.item === sortName

      const handleSort = () => {
        if (sortable) {
          if (hasSort && sort.order === 'desc') {
            setSort({
              item: '',
              order: ''
            })
          } else {
            setSort({
              item: sortName,
              order: hasSort ? 'desc' : 'asc'
            })
          }
        }
      }

      return (
        <TableHead align={align} key={index} onClick={handleSort} sortable={sortable}>
          {text}
          {sortable && hasSort && (
            <Icon icon={sort.order === 'asc' ? 'caret-down' : 'caret-up'} prefix='fas' />
          )}
        </TableHead>
      )
    })
  }

  const renderRows = () => {
    const clickable = typeof rowClick === 'function'

    const temp = pagination ? rows.slice((currentPage - 1) * perPage, currentPage * perPage) : rows

    return temp.map((row, index) => {
      const context = row.context
      delete row.context

      if (row.hidden) {
        return null
      } else {
        delete row.hidden
      }

      return (
        <TableRow
          context={context}
          key={index}
          data-item={JSON.stringify(row)}
          hover={hover}
          onClick={clickable ? handleClick : null}
          pointer={clickable}
          striped={striped}
        >
          {Object.entries(row).map(([key, value], index) => {
            const length = columns.length
            const column = columns[index]

            if (length && column.hidden) {
              return
            }

            const renderValue = typeof value === 'function' ? value() : value

            return (
              <TableData align={align} key={index}>
                {length > 0 && column.formatter ? (
                  column.formatter({ row }, column.formatterData)
                ) : value && value.__html ? (
                  <span dangerouslySetInnerHTML={value} />
                ) : (
                  renderValue
                )}
              </TableData>
            )
          })}
        </TableRow>
      )
    })
  }

  const renderTable = () => (
    <StyledTable className={className}>
      {caption && <StyledCaption>{caption}</StyledCaption>}

      <thead>
        <tr>{columns && renderColumns()}</tr>
      </thead>

      <tbody>
        {noData && !loading && !rows.length ? (
          <TableRow>
            <TableData align='center' colSpan={tableSpan}>
              No data available
            </TableData>
          </TableRow>
        ) : (
          renderRows()
        )}
      </tbody>
    </StyledTable>
  )

  return (
    <>
      <StyledWrapper fullHeight={fullHeight} isLoading={loading}>
        <TableLoading colsLength={tableSpan} show={loading} />

        {responsive ? <StyledResponsive>{renderTable()}</StyledResponsive> : renderTable()}
      </StyledWrapper>

      {pagination && rows.length > 0 && (
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePagination}
          pageCount={Math.ceil(rows.length / perPage)}
          showNextAndPrev
          size='sm'
          style={{
            marginTop: '10px'
          }}
          {...otherPaginationProps}
        />
      )}
    </>
  )
}

const StyledWrapper = styled.div`
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
  background-color: #fff;
  display: block;
  overflow-x: auto;
  width: 100%;
`

const StyledTable = styled.table`
  background-color: ${({ theme }) => theme.COLOUR.transparent};
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.TABLE.fontSize};
  width: 100%;
`

const StyledCaption = styled.caption`
  caption-side: bottom;
  color: #6c757d;
  padding: ${({ theme }) => theme.TABLE.padding} 0;
  text-align: left;
`

Table.propTypes = {
  align: bool,
  caption: string,
  className: string,
  columns: array,
  fullHeight: bool,
  hover: bool,
  loading: bool,
  pagination: bool,
  paginationProps: shape({
    changeUrlOnChange: bool,
    initialPage: number,
    perPage: number,
    ...PaginationPropTypes
  }),
  responsive: bool,
  rowClick: func,
  rows: array.isRequired,
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
  sort: {
    item: '',
    order: ''
  },
  striped: true
}
