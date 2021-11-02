import {
  setMonth,
  endOfMonth,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay
} from 'date-fns'
import React from 'react'
import styled from 'styled-components'
// UI
import Button from '../../../atoms/button/button/button'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import Row from '../../../atoms/grid/Row'
import Space from '../../../atoms/space/space'
import Tooltip from '../../../atoms/tooltip/tooltip'

// Style
import THEME_ALIGN from '../../../constants/align'
import THEME_SIZE from '../../../constants/size'

import { ColumnPagination } from './helper'

const columnPattern = {
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  month: ['Week1', 'Week2', 'Week3', 'Week4'],
  week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  day: [...Array(12).keys()]
}

const DATE_TYPE = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day'
}

const formatCell = (handleClick, month, row, otherData) => {
  return row[month] && row[month][0] ? (
    row[month][2] ? (
      <Tooltip content={row[month][2]}>
        <Wrapper
          context={row[month][1] ? row[month][1] : 'light'}
          count={row[month][0] || row[month]}
          onClick={(e) =>
            (row[month][0] > 0 || row[month] > 0) && handleClick({ e, month, row }, otherData)
          }
        >
          {row[month][0] ? row[month][0] : row[month]}
        </Wrapper>
      </Tooltip>
    ) : (
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
  ) : (
    '0'
  )
}

export const columns = (handleClick, options) => {
  const {
    mode = DATE_TYPE.MONTH,
    setCurrentDate,
    currentDate,
    hiddenColumn,
    currentDataSource,
    onTitleFormatter
  } = options
  if (!currentDataSource.length) return []

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
      case 'month':
      case 'year': {
        const year = setMonth(
          new Date(currentDate),
          columnPattern[mode].findIndex((i) => i.toString().toLowerCase() === key)
        )
        return { startDate: startOfMonth(year), endDate: endOfMonth(year) }
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

  columnPattern[mode].forEach((item, i) => {
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

const args = {
  align: THEME_ALIGN.Start,
  size: THEME_SIZE.MD
}

const isActiveMenu = (currentMode, mode) => (currentMode === mode ? 'primary' : 'secondary')

export const ScheduleToolbar = ({ mode, setMode }) => {
  return (
    <Row justify={'end'}>
      <Space marginRight="sm" marginBottom="sm">
        <ButtonToolbar {...args}>
          <Button
            content="Year"
            size="sm"
            context={isActiveMenu(DATE_TYPE.YEAR, mode)}
            onClick={() => setMode(DATE_TYPE.YEAR)}
          />
          <Button
            content="Month"
            size="sm"
            context={isActiveMenu(DATE_TYPE.MONTH, mode)}
            onClick={() => setMode(DATE_TYPE.MONTH)}
          />
          <Button
            content="Week"
            size="sm"
            context={isActiveMenu(DATE_TYPE.WEEK, mode)}
            onClick={() => setMode(DATE_TYPE.WEEK)}
          />
          <Button
            content="Day"
            size="sm"
            context={isActiveMenu(DATE_TYPE.DAY, mode)}
            onClick={() => setMode(DATE_TYPE.DAY)}
          />
        </ButtonToolbar>
      </Space>
    </Row>
  )
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
