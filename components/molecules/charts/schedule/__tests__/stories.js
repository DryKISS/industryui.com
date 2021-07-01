/**
 * Components - Molecules - Charts - Schedule - Story
 */

// React
import React,{useState} from 'react'

// UI
import Schedule from '../schedule'
import Readme from '../README.md'
import SCHEDULE from '../__mocks__/scheduleMock'

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

const handleClick = ({ e, month, row }) => {
  e.stopPropagation()
  console.info('Month', month)
  console.info('Row', row)
  console.info('Cell CLick', e)
}

const handleRowClick = (row) => {
  console.info('Row Click', row)
}

export const main = (args) => (
  <Schedule {...args} data={SCHEDULE} handleClick={handleClick} handleRowClick={handleRowClick} />
)

export const withPagination = (args) => {
  const [currentYear, setCurrentYear] = useState(2021)
  const handleYearChange = (page) => {
    setCurrentYear(page)
  }

  return (
    <Schedule
      {...args}
      data={SCHEDULE}
      handleClick={handleClick}
      handleRowClick={handleRowClick}
      onYearChange={handleYearChange}
      currentYear={currentYear}
      yearRange={[2020, 2021, 2022]}
    />
  )
}
