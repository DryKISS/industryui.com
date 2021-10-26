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
import { prepareResult } from './helper'
const DATE_TYPE = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day'
}

const Schedule = ({
  currentYear,
  handleFetchData,
  handleClick,
  handleRowClick,
  flag,
  initialData,
  initialMode,
  hiddenColumn,
  events,
  splitDate, // only used for row to generate date
  onYearChange,
  yearRange
}) => {
  const [mode, setMode] = useState('year')
  const [currentDate, setCurrentDate] = useState(new Date().toISOString())
  const [dataSource, setDataSource] = useState([])

  useEffect(async () => {
    const arr = [...(await handleFetchData(mode, currentDate))]
    setDataSource(arr)
  }, [])

  useEffect(async () => {
    const arr = [...(await handleFetchData(mode, currentDate))]
    setDataSource(arr)
  }, [mode, currentDate])

  if (!Object.values(DATE_TYPE).includes(initialMode))
    throw new Error('initialMode can be one of day, week, month or year values')

  const currentDataSource = dataSource?.length > 0 ? dataSource : initialData || []

  const generateColumn = columns(handleClick, {
    currentYear,
    mode,
    setCurrentDate,
    currentDate,
    events,
    hiddenColumn,
    currentDataSource
  })

  const prepareData = prepareResult(mode, currentDataSource, events, generateColumn)

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
  flag: string,
  splitDate: string,
  initialMode: oneOf(Object.values(DATE_TYPE)),
  initialData: array,
  handleFetchData: func,
  handleClick: func,
  handleRowClick: func,
  hiddenColumn: array
}

export default Schedule
