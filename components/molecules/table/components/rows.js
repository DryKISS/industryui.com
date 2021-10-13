/**
 * Components - Molecules - Table - Rows
 */

// React
import React, { memo, useCallback, useState } from 'react'
import { array, bool, func, oneOfType, string } from 'prop-types'

// UI
import TableData from './data'
import TableRow from './row'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'

const Wrapper = ({ children, dragableRows }) => {
  return dragableRows ? (
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
  ) : (
    <>{children}</>
  )
}

const TableRows = memo(
  ({
    align,
    changeSelectedRowBackground,
    columns,
    dragableRows,
    hover,
    rowClick,
    rows,
    striped
  }) => {
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

    const [rowsState, setRowsState] = useState(rows)
    const moveRow = useCallback(
      (dragIndex, hoverIndex) => {
        const dragRow = rowsState[dragIndex]
        setRowsState(
          update(rowsState, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragRow]
            ]
          })
        )
      },
      [rowsState]
    )

    return (
      <Wrapper {...{ dragableRows }}>
        {rowsState.map((row, index) => {
          if (row.hidden) {
            return null
          } else {
            delete row.hidden
          }

          return (
            <TableRow
              context={row.context}
              data-item={JSON.stringify(row)}
              dragableRows={dragableRows}
              hover={hover}
              key={row.id}
              id={row.id}
              index={index}
              moveRow={moveRow}
              onClick={clickable ? (row) => handleClick(row, index) : null}
              pointer={clickable}
              selected={changeSelectedRowBackground === true ? selectedIndex === index : false}
              striped={striped}
            >
              {Object.entries(row).map(([key, value], index) => {
                const length = columns.length
                const column = columns[index]

                if (length && column.hidden) {
                  return null
                }

                const formatterData = column?.formatterData
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
        })}
      </Wrapper>
    )
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
  hover: true,
  striped: true
}

export default TableRows
