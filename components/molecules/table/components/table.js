/**
 * Components - Molecules - Table
 */

// React
import React from 'react'
import { array, bool, func, number, oneOfType, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import TableCaption from './caption'
import TableColumns from './columns'
import TableData from './data'
import TableRow from './row'
import TableRows from './rows'

const TableContent = ({
  align,
  caption,
  changeSelectedRowBackground,
  className,
  columns,
  hover,
  loading,
  noData,
  rowClick,
  rows,
  sort,
  setSort,
  striped,
  tableSpan
}) => {
  const bottomCells = { data: [], hasData: false }
  columns.forEach((element) => {
    if (element.bottomCell) {
      bottomCells.hasData = true
      bottomCells.data.push(element)
    } else {
      bottomCells.data.push(null)
    }
  })
  return (
    <StyledTable className={className}>
      {caption !== '' && <TableCaption>{caption}</TableCaption>}
      {columns && <TableColumns align={align} columns={columns} setSort={setSort} sort={sort} />}

      <tbody>
        {noData && !loading && !rows.length ? (
          <TableRow>
            <TableData align="center" colSpan={tableSpan}>
              No data available
            </TableData>
          </TableRow>
        ) : (
          <TableRows
            align={align}
            bottomCells={bottomCells}
            columns={columns}
            changeSelectedRowBackground={changeSelectedRowBackground}
            hover={hover}
            rowClick={rowClick}
            rows={rows}
            striped={striped}
          />
        )}
        {bottomCells?.hasData && (
          <TableRow>
            {bottomCells.data.map((cell, j) => (
              <TableData key={`bottom${j}`}>{cell ? cell.bottomCell : ''}</TableData>
            ))}
          </TableRow>
        )}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  border-collapse: collapse;
  color: ${({ theme }) => theme.TABLE.color};
  font-size: ${({ theme }) => theme.TABLE.fontSize};
  width: 100%;
`

TableContent.propTypes = {
  align: oneOfType([string, bool]),
  caption: string,
  className: string,
  changeSelectedRowBackground: bool,
  columns: array,
  hover: bool,
  loading: bool,
  noData: bool,
  rowClick: func,
  rows: array.isRequired,
  sort: shape({
    item: string,
    order: string
  }),
  setSort: func,
  striped: bool,
  tableSpan: number
}

TableContent.defaultProps = {
  align: false,
  changeSelectedRowBackground: false,
  columns: [],
  hover: true,
  loading: false,
  noData: true,
  sort: {},
  striped: true
}

export default TableContent
