/**
 * Components - Molecules - Charts - Schedule
 */

// React
import React, { useEffect, useState } from 'react'
import { array, func, oneOf, string } from 'prop-types'

// Constant
import DATE_TYPE from '../../../constants/dateType'

// UI
import Pagination from '../../../molecules/pagination/pagination'
import ScheduleToolbar from './helper/scheduleToolbar'
import Space from '../../../atoms/space/space'
import Table from '../../../molecules/table/table'
import columns from './helper/columns'
import generateFilterDate from './helper/generateFilterDate'
import prepareHiddenColumn from './helper/prepareHiddenColumn'
import prepareScheduleRows from './helper/prepareScheduleRows'
import validateDataSource from './helper/validateDataSource'

const Schedule = ({
  currentYear,
  dataSource,
  events,
  eventTimeSplitting,
  initialMode,
  hiddenColumn,
  handleFetchData,
  handleClick,
  handleRowClick,
  flag,
  onYearChange,
  onTitleFormatter,
  title,
  yearRange
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

  const isDataValid = validateDataSource({
    dataSource,
    eventTimeSplitting,
    events,
    hiddenColumn,
    flag,
    title
  })

  if (!isDataValid.isValid) throw new Error(JSON.stringify(isDataValid.errors))

  const generateColumn = columns(handleClick, {
    currentDate,
    currentDataSource,
    events,
    hiddenColumn: prepareHiddenColumn(hiddenColumn),
    mode,
    onTitleFormatter,
    setCurrentDate
  })

  const prepareData = prepareScheduleRows({
    currentDataSource,
    currentDate,
    events,
    eventTimeSplitting,
    flag,
    generateColumn,
    mode,
    title
  })

  return (
    <>
      {!yearRange && <ScheduleToolbar mode={mode} setMode={setMode} />}
      <Table
        align="center"
        columns={generateColumn}
        hover={false}
        fullHeight={true}
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
  dataSource: array,
  events: string,
  eventTimeSplitting: string,
  flag: string,
  handleFetchData: func,
  handleClick: func,
  handleRowClick: func,
  hiddenColumn: array,
  initialMode: oneOf(Object.values(DATE_TYPE)),
  title: string
}

export default Schedule
