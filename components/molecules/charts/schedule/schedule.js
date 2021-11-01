/**
 * Components - Molecules - Charts - Schedule
 */

// React
import React, { useEffect, useState } from 'react'
import { array, func, string, oneOf } from 'prop-types'

// UI
import Space from '../../../atoms/space/space'
import Table from '../../../molecules/table/table'
import Pagination from '../../../molecules/pagination/pagination'

import { columns, ScheduleToolbar } from './columnHelper'
import { prepareHiddenColumn, prepareScheduleRows, generateFilterDate } from './helper'

const DATE_TYPE = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day'
}

const Schedule = ({
  currentYear,
  dataSource,
  events,
  eventTimeSplitting,
  flag,
  hiddenColumn,
  initialMode,
  title,
  yearRange,
  onYearChange,
  onTitleFormatter,
  handleFetchData,
  handleClick,
  handleRowClick
}) => {
  const [mode, setMode] = useState('year')
  const [currentDate, setCurrentDate] = useState(new Date().toISOString())

  useEffect(async () => {
    const filterDate = generateFilterDate(mode, currentDate)
    await handleFetchData({ ...filterDate }, mode)
  }, [])

  useEffect(async () => {
    const filterDate = generateFilterDate(mode, currentDate)
    await handleFetchData({ ...filterDate }, mode)
  }, [mode, currentDate])

  if (!Object.values(DATE_TYPE).includes(initialMode))
    throw new Error('initialMode can be one of day, week, month or year values')

  const currentDataSource = dataSource?.length > 0 ? dataSource : []

  const generateColumn = columns(handleClick, {
    currentDate,
    currentDataSource,
    events,
    hiddenColumn: prepareHiddenColumn(hiddenColumn),
    setCurrentDate,
    mode,
    onTitleFormatter
  })

  const prepareData = prepareScheduleRows(mode, {
    currentDataSource,
    currentDate,
    events,
    eventTimeSplitting,
    generateColumn,
    flag,
    title
  })

  return (
    <>
      {!yearRange && <ScheduleToolbar mode={mode} setMode={setMode} />}
      <Table
        align="center"
        columns={generateColumn}
        hover={false}
        rowClick={handleRowClick}
        rows={prepareData}
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

Schedule.propTypes = {
  events: string,
  eventTimeSplitting: string,
  flag: string,
  initialMode: oneOf(Object.values(DATE_TYPE)),
  dataSource: array,
  title: string,
  handleFetchData: func,
  handleClick: func,
  handleRowClick: func,
  hiddenColumn: array
}

export default Schedule
