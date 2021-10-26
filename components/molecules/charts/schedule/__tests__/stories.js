/**
 * Components - Molecules - Charts - Schedule - Story
 */

// React
import React, { useState } from 'react'

// UI
import Schedule from '../schedule'
import Readme from '../README.md'
import { SCHEDULES, EXTERNAL_SCHEDULE_DATA } from '../__mocks__/scheduleMock'

export default {
  component: Schedule,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Charts/Schedule'
}
const handleClick = (e, column) => {
  console.log('handleClick')

  console.log('column', column)
}

const handleRowClick = (row) => {
  console.info('Row Click', row)
}

export const Main = (args) => {
  return (
    <Schedule
      {...args}
      handleFetchData={(mode, date) => EXTERNAL_SCHEDULE_DATA}
      initialData={EXTERNAL_SCHEDULE_DATA}
      initialMode="week"
      hiddenColumn={{
        id: ' ',
        costCustomer: ' ',
        costSupplier: ' ',
        serviceName: ' ',
        compliance: ' ',
        jobs: []
      }}
      events={'jobs'}
      flag={'rag'}
      handleClick={handleClick}
      handleRowClick={handleRowClick}
    />
  )
}

export const WithPagination = (args) => {
  const [currentYear, setCurrentYear] = useState(2021)
  const handleYearChange = (page) => {
    setCurrentYear(page)
  }
  const years = [2020, 2021, 2022]
  return (
    <Schedule
      {...args}
      initialMode="year"
      initialData={EXTERNAL_SCHEDULE_DATA}
      initialMode="year"
      hiddenColumn={{
        id: ' ',
        costCustomer: ' ',
        costSupplier: ' ',
        serviceName: ' ',
        compliance: ' ',
        jobs: []
      }}
      events={'jobs'}
      flag={'rag'}
      handleFetchData={() => SCHEDULES[years.indexOf(currentYear)]}
      handleRowClick={handleRowClick}
      onYearChange={handleYearChange}
      currentYear={currentYear}
      yearRange={[2020, 2021, 2022]}
    />
  )
}
