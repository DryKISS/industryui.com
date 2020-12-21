/**
 * Components - Molecules - Table
 */

// React
import { array, bool, func, number, shape, string } from 'prop-types'

// UI
import { TableCaption, TableColumns, TableData, TableRow, TableRows } from '../../../'

// Style
import styled from 'styled-components'

export const TableContent = ({
  align,
  caption,
  className,
  columns,
  currentPage,
  hover,
  loading,
  noData,
  pagination,
  perPage,
  rowClick,
  rows,
  sort,
  setSort,
  striped,
  tableSpan
}) => {
  return (
    <StyledTable className={className}>
      {caption !== '' && <TableCaption>{caption}</TableCaption>}
      {columns && <TableColumns align={align} columns={columns} setSort={setSort} sort={sort} />}

      <tbody>
        {noData && !loading && !rows.length ? (
          <TableRow>
            <TableData align='center' colSpan={tableSpan}>
              No data available
            </TableData>
          </TableRow>
        ) : (
          <TableRows
            align={align}
            columns={columns}
            hover={hover}
            rowClick={rowClick}
            rows={rows}
            striped={striped}
          />
        )}
      </tbody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.TABLE.fontSize};
  width: 100%;
`

TableContent.propTypes = {
  align: bool,
  caption: string,
  className: string,
  columns: array,
  currentPage: number,
  hover: bool,
  loading: bool,
  noData: bool,
  pagination: bool,
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
  columns: [],
  hover: true,
  loading: false,
  noData: true,
  pagination: false,
  sort: {},
  striped: true
}
