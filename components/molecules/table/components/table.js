/**
 * Components - Molecules - Table
 */

// React
import React from 'react'
import { array, bool, func, number, oneOfType, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { TableCaption, TableColumns, TableData, TableRow, TableRows } from '../../../'

export const TableContent = ({
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
  const bottomCells = {
    data: [],
    hasData: false
  }

  columns.forEach((row) => {
    if (row.hidden) {
      return null
    }

    if (row.bottomCell) {
      bottomCells.hasData = true
      bottomCells.data.push(row)
    } else {
      bottomCells.data.push(null)
    }
  })

  return (
    <StyledTable className={className}>
      {columns && <TableColumns align={align} columns={columns} setSort={setSort} sort={sort} />}
      {caption !== '' && <TableCaption>{caption}</TableCaption>}

      {noData && !loading && !rows.length ? (
        <tbody>
          <TableRow>
            <TableData align="center" colSpan={tableSpan}>
              No data available
            </TableData>
          </TableRow>
        </tbody>
      ) : (
        <>
          <tbody>
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
          </tbody>

          {bottomCells?.hasData && (
            <tfoot>
              <TableRow>
                {bottomCells.data.map((cell, j) => (
                  <TableData key={`bottom${j}`}>{cell ? cell.bottomCell : ''}</TableData>
                ))}
              </TableRow>
            </tfoot>
          )}
        </>
      )}
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
