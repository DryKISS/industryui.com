/**
 * Components - Molecules - Charts - Schedule - Helper - Columns
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// Date FNS
import {
  endOfMonth,
  endOfDay,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  startOfDay,
  setMonth,
  setDay
} from 'date-fns'

// UI
import ColumnPagination from './columnPagination'
import Tooltip from '../../../../atoms/tooltip/tooltip'
import DATE_TYPE from '../../../../constants/dateType'

const COLUMN_PATTERN = {
  day: [...Array(12).keys()],
  month: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'],
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
}

const CellWrapper = ({ month, row, handleClick, otherData }) => (
  <Wrapper
    context={row[month][1] ? row[month][1] : 'light'}
    count={row[month][0] || row[month]}
    onClick={(e) =>
      (row[month][0] > 0 || row[month] > 0) && handleClick({ e, month, row }, otherData)
    }
  >
    {row[month][0] ? row[month][0] : row[month]}
  </Wrapper>
)

const formatCell = (handleClick, month, row, otherData) => {
  return row[month] && row[month][0] ? (
    row[month][2] ? (
      <Tooltip content={row[month][2]}>
        <CellWrapper {...{ row, month, otherData, handleClick }} />
      </Tooltip>
    ) : (
      <CellWrapper {...{ row, month, otherData, handleClick }} />
    )
  ) : (
    '0'
  )
}

export default (handleClick, options) => {
  const {
    mode = DATE_TYPE.MONTH,
    setCurrentDate,
    currentDate,
    hiddenColumn,
    currentDataSource,
    onTitleFormatter
  } = options

  if (!currentDataSource.length) {
    return []
  }

  const data = currentDataSource[0]
  const result = []

  Object.keys(data).forEach((item) => {
    if (hiddenColumn[item]) result.push({ text: item, hidden: true })
  })

  result.push({
    formatter: onTitleFormatter,
    text: <ColumnPagination {...{ setCurrentDate, mode, currentDate }} />
  })

  result.push({
    text: 'Count'
  })

  const calculateCurrentDate = (mode, key) => {
    switch (mode) {
      case 'year': {
        const year = setMonth(
          new Date(currentDate),
          COLUMN_PATTERN[mode].findIndex((i) => i.toString().toLowerCase() === key)
        )
        return { startDate: startOfMonth(year), endDate: endOfMonth(year) }
      }
      case 'month': {
        const getWeekNumber = key[key.length - 1]
        const day = setDay(new Date(currentDate), getWeekNumber * 7 - 1)
        return {
          startDate: startOfWeek(new Date(day)),
          endDate: endOfWeek(new Date(day))
        }
      }
      case 'week': {
        return {
          startDate: startOfWeek(new Date(currentDate)),
          endDate: endOfWeek(new Date(currentDate))
        }
      }
      case 'day': {
        return {
          startDate: startOfDay(new Date(currentDate)),
          endDate: endOfDay(new Date(currentDate))
        }
      }
    }
  }

  COLUMN_PATTERN[mode].forEach((item, i) => {
    const text = mode === DATE_TYPE.DAY ? item + 1 : item
    const key = String(text).toLowerCase()
    result.push({
      formatter: ({ row }) => {
        return formatCell((e) => handleClick(e, key, calculateCurrentDate(mode, key)), key, row, {
          month: i + 1
        })
      },
      text
    })
  })

  return result
}

const Wrapper = styled.div`
  align-items: center;
  color: ${({ context, theme }) => (context !== 'light' ? theme.COLOUR.white : theme.COLOUR.dark)};
  background: ${({ context, theme }) => theme.COLOUR[context]};
  border-radius: 10px;
  cursor: ${({ count, theme }) => count > 0 && 'pointer'};
  display: flex;
  height: 3rem;
  justify-content: center;
  text-shadow: 1px 2px 2px #bbb;
  width: 3rem;
  margin: auto;
`
