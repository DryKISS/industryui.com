/**
 * Components - Molecules - Charts - Schedule
 */

// React
import React, { useState, memo } from 'react'
import { func, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../atoms/button/button/button'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import { ColumnPagination } from './helper'
import formatPrice from '../../../utils/formatPrice/formatPrice'
import Icon from '../../../atoms/icon/icon/icon'
import shadeLinearRgb from '../../../utils/colour/shadeLinearRgb'
import Space from '../../../atoms/space/space'
import Table from '../../../molecules/table/table'
import Text from '../../../atoms/text/text'
import THEME_ALIGN from '../../../constants/align'
import Tooltip from '../../../atoms/tooltip/tooltip'
import THEME_SIZE from '../../../constants/size'
import Pagination from '../../../molecules/pagination/pagination'
import Row from '../../../atoms/grid/Row'

const DATE_TYPE = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day'
}

const columnPattern = {
  year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  month: ['Week1', 'Week2', 'Week3', 'Week4'],
  week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
  day: [...Array(12).keys()]
}

const args = {
  align: THEME_ALIGN.Start,
  size: THEME_SIZE.MD
}

const formatCell = (handleClick, month, row, otherData) => {
  return row[month][0] || row[month] ? (
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
        {row.task}
      </Text>
      {row.costCustomer && <Text size="xs">Customer: {formatPrice(row.costCustomer)}</Text>}
      {row.costSupplier && <Text size="xs">Supplier: {formatPrice(row.costSupplier)}</Text>}
    </>
  )
}

const columns = (handleClick, options) => {
  const { currentYear, mode = DATE_TYPE.MONTH, setCurrentDate, currentDate } = options
  const result = [
    {
      hidden: true
    },
    {
      formatter: formatTask,
      text: <ColumnPagination {...{ setCurrentDate, mode, currentDate }} />
    },
    {
      hidden: true
    },
    {
      text: 'Count'
    },
    {
      hidden: true
    },
    {
      hidden: true
    }
  ]

  columnPattern[mode].forEach((item, i) => {
    const text = mode === DATE_TYPE.DAY ? item + 1 : item
    const key = String(text).toLowerCase()
    result.push({
      formatter: ({ row }) =>
        formatCell((e) => handleClick(e, key), key, row, {
          month: i + 1,
          year: currentYear
        }),
      text: mode === DATE_TYPE.DAY ? `${text}hr` : text
    })
  })
  return result
}

const isActiveMenu = (currentMode, mode) => (currentMode === mode ? 'primary' : 'secondary')

const ScheduleToolbar = ({ mode, setMode }) => {
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

const Schedule = memo(
  ({
    currentYear,
    handleFetchData,
    handleClick,
    handleRowClick,
    initialMode,
    onYearChange,
    yearRange
  }) => {
    const [mode, setMode] = useState(initialMode)
    const [currentDate, setCurrentDate] = useState(new Date())

    if (!Object.values(DATE_TYPE).includes(initialMode))
      throw new Error('initialMode can be one of day, week, month or year values')

    const dataSource = handleFetchData(mode, currentDate)

    return (
      <>
        {!yearRange && <ScheduleToolbar mode={mode} setMode={setMode} />}
        <Table
          align="center"
          columns={columns(handleClick, { currentYear, mode, setCurrentDate, currentDate })}
          hover={false}
          rowClick={handleRowClick}
          rows={dataSource}
        />
        {yearRange && (
          <>
            <Space marginTop="sm">
              <Pagination
                pageCount={yearRange.length}
                pageRange={yearRange}
                currentPage={currentYear}
                onPageChange={onYearChange}
                context={'primary'}
              ></Pagination>
            </Space>
          </>
        )}
      </>
    )
  },
  () => true
)

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

Schedule.propTypes = {
  initialMode: oneOf(Object.values(DATE_TYPE)),
  handleFetchData: func,
  handleClick: func,
  handleRowClick: func
}

export default Schedule
