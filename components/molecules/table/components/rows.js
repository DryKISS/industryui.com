/**
 * Components - Molecules - Table - Rows
 */

// React
import React, { memo } from 'react'
import { array, bool, func, oneOfType, string } from 'prop-types'

// UI
import { TableData, TableRow } from '../../../'

export const TableRows = memo(({ align, columns, hover, rowClick, rows, striped }) => {
  const handleClick = e => {
    e.preventDefault()
    const row = e.currentTarget.getAttribute('data-item')
    rowClick(JSON.parse(row))
  }

  const clickable = typeof rowClick === 'function'

  return rows.map((row, index) => {
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
        data-item={JSON.stringify(row)}
        hover={hover}
        key={index}
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
                column.formatter({ row, data: column.formatterData })
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
})

TableRows.propTypes = {
  align: oneOfType([string, bool]),
  columns: array,
  hover: bool,
  rowClick: func,
  rows: array.isRequired,
  striped: bool
}

TableRows.defaultProps = {
  align: false,
  columns: [],
  hover: true,
  striped: true
}
