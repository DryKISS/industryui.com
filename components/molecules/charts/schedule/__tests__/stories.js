/**
 * Components - Molecules - Charts - Schedule - Story
 */

// React
import React from 'react'

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
