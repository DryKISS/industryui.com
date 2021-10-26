import React from 'react'
import Button from '../../../atoms/button/button/button'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import Row from '../../../atoms/grid/Row'
import Space from '../../../atoms/space/space'

import { ColumnPagination } from './helper'
import formatPrice from '../../../utils/formatPrice/formatPrice'
import Icon from '../../../atoms/icon/icon/icon'
import Tooltip from '../../../atoms/tooltip/tooltip'
import Text from '../../../atoms/text/text'

// Style
import styled from 'styled-components'

import shadeLinearRgb from '../../../utils/colour/shadeLinearRgb'

import THEME_ALIGN from '../../../constants/align'

import THEME_SIZE from '../../../constants/size'

const columnPattern = {
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  month: ['Week1', 'Week2', 'Week3', 'Week4'],
  week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
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

const formatTask = ({ row }) => {
  return (
    <>
      <Text size="sm">
        {row.compliance && <Icon context="info" icon="clipboard-check" />}
        {row.serviceName}
      </Text>
      {row.costCustomer && <Text size="xs">Customer: {formatPrice(row.costCustomer)}</Text>}
      {row.costSupplier && <Text size="xs">Supplier: {formatPrice(row.costSupplier)}</Text>}
    </>
  )
}

export const columns = (handleClick, options) => {
  const {
    currentYear,
    mode = DATE_TYPE.MONTH,
    setCurrentDate,
    currentDate,
    hiddenColumn,
    currentDataSource
  } = options

  const sampleData = currentDataSource?.pop() || []
  if (sampleData.length > 0) return []
  const result = []

  Object.keys(sampleData).forEach((item) => {
    if (hiddenColumn && hiddenColumn[item]) result.push({ text: item, hidden: true })
  })

  result.push({
    formatter: formatTask,
    text: <ColumnPagination {...{ setCurrentDate, mode, currentDate }} />
  })

  result.push({
    text: 'Count'
  })

  columnPattern[mode].forEach((item, i) => {
    const text = mode === DATE_TYPE.DAY ? item + 1 : item
    const key = String(text).toLowerCase()
    result.push({
      formatter: ({ row }) =>
        formatCell((e) => handleClick(e, key), key, row, {
          month: i + 1,
          year: currentYear
        }),
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
  &:hover {
    background-color: ${({ context, count, theme: { COLOUR } }) =>
      count > 0 && shadeLinearRgb(-0.1, COLOUR[context])};
  }
`
