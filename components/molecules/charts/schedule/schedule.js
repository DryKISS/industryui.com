/**
 * Components - Molecules - Charts - Schedule
 */

// React
import React, { useState } from 'react'
import { array, func, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../atoms/button/button/button'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
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
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day'
}

const columnPattern = {
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
  day: [...Array(31).keys()]
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

const columns = (handleClick, currentYear, mode = DATE_TYPE.MONTH) => {
  const result = [
    {
      hidden: true
    },
    {
      formatter: formatTask,
      text: '2021'
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
    const text = mode === DATE_TYPE.DAY ? item + 1 : item.toLowerCase()
    result.push({
      formatter: ({ row }) =>
        formatCell(handleClick, text, row, { month: i + 1, year: currentYear }),
      text: text
    })
  })
  return result
}
const isActiveMenu = (currentMode, mode) => {
  return currentMode === mode ? 'primary' : 'secondary'
}

const ScheduleToolbar = ({ mode, setMode }) => {
  return (
    <Row justify={'end'}>
      <ButtonWrapper>
        <ButtonToolbar {...args}>
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
      </ButtonWrapper>
    </Row>
  )
}

const Schedule = ({
  handleFetchData,
  data,
  handleClick,
  handleRowClick,
  initialMode,
  onYearChange,
  currentYear,
  yearRange
}) => {
  const [mode, setMode] = useState(initialMode)

  if (!Object.values(DATE_TYPE).includes(initialMode))
    throw new Error('initialMode can be one of day, week or month values')

  return (
    <>
      {!yearRange && <ScheduleToolbar mode={mode} setMode={setMode} />}
      <Table
        align="center"
        columns={columns(handleClick, currentYear, mode)}
        hover={false}
        rowClick={handleRowClick}
        rows={handleFetchData(mode)}
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
}

const ButtonWrapper = styled.div`
  margin-right: 15px;
  margin-bottom: 10px;
`

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
  data: array.isRequired,
  handleClick: func,
  handleRowClick: func
}

export default Schedule
