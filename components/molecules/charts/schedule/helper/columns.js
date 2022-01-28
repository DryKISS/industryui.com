/**
 * Components - Molecules - Charts - Schedule - Helper - Columns
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// Date FNS
import {
  addWeeks,
  addDays,
  endOfMonth,
  endOfWeek,
  endOfDay,
  endOfHour,
  startOfMonth,
  startOfWeek,
  setMonth,
  startOfHour,
  startOfDay,
  setHours
} from 'date-fns'

// UI
import ColumnPagination from './columnPagination'
import Tooltip from '../../../../atoms/tooltip/tooltip'
import DATE_TYPE from '../../../../constants/dateType'

const COLUMN_PATTERN = {
  day: [...Array(24).keys()],
  month: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'],
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
}

const CellWrapper = ({ month, row, handleClick, otherData }) => {
  const numMonth = Array.isArray(row[month]) ? row[month] : parseInt(row[month], 10)

  return (
    <Wrapper
      context={numMonth[1] ? numMonth[1] : 'light'}
      count={numMonth[0] || numMonth}
      onClick={(e) =>
        (numMonth[0] > 0 || numMonth > 0) && handleClick({ e, month, row }, otherData)
      }
    >
      {numMonth[0] ? numMonth[0] : numMonth}
    </Wrapper>
  )
}

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
    currentDate,
    currentDataSource,
    hiddenColumn,
    mode = DATE_TYPE.MONTH,
    onTitleFormatter,
    setCurrentDate
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

  const countFormatter = ({ row }) => {
    return <>{row.count}</>
  }

  result.push({
    formatter: countFormatter,
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
        const result = parseInt(key[key.length - 1], 10)
        let calMonth = startOfMonth(new Date(currentDate))
        if (result > 1) calMonth = addWeeks(calMonth, result - 1)
        return {
          startDate: startOfWeek(calMonth),
          endDate: endOfWeek(calMonth)
        }
      }
      case 'week': {
        const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        const countDate = addDays(
          startOfWeek(new Date(currentDate)),
          week.findIndex((i) => i === key) + 1
        )
        return {
          startDate: startOfDay(countDate),
          endDate: endOfDay(countDate)
        }
      }
      case 'day': {
        const calHour = setHours(new Date(currentDate), key)
        return {
          startDate: startOfHour(calHour),
          endDate: endOfHour(calHour)
        }
      }
    }
  }

  COLUMN_PATTERN[mode].forEach((item, i) => {
    const text = mode === DATE_TYPE.DAY ? item : item
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
