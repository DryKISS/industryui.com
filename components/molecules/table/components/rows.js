/**
 * Components - Molecules - Table - Rows
 */

// React
import React, { memo, useState } from 'react'
import { array, bool, func, oneOfType, string } from 'prop-types'

// UI
import { TableData, TableRow } from '../../../'

export const TableRows = memo(
  ({ align, changeSelectedRowBackground, columns, hover, rowClick, rows, striped }) => {
    const [selectedIndex, setSelectedIndex] = useState(null)

    const handleClick = (e, index) => {
      e.preventDefault()
      const row = e.currentTarget.getAttribute('data-item')
      rowClick(JSON.parse(row))

      if (changeSelectedRowBackground) {
        setSelectedIndex(index)
      }
    }

    const clickable = typeof rowClick === 'function'

    return rows.map((row, index) => {
      const context = row.context

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
          onClick={clickable ? (row) => handleClick(row, index) : null}
          pointer={clickable}
          selected={changeSelectedRowBackground === true ? selectedIndex === index : false}
          striped={striped}
        >
          {Object.entries(row).map(([key, value], index) => {
            const length = columns.length
            const column = columns[index]
            const formatterData = column?.formatterData
            if (length && column.hidden) {
              return null
            }

            const renderValue = typeof value === 'function' ? value() : value

            return (
              <TableData align={align} key={index}>
                {length > 0 && column.formatter ? (
                  typeof formatterData === 'function' ? (
                    column.formatter({
                      row,
                      data: (row) => formatterData
                    })
                  ) : (
                    column.formatter({ row, data: formatterData })
                  )
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
)

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
