/**
 * Components - Molecules - Charts - Schedule - Helper - Column Pagination
 */

// React
import React from 'react'
import {
  addYears,
  addMonths,
  addWeeks,
  addDays,
  daysToWeeks,
  format,
  subWeeks,
  subDays,
  subYears,
  subMonths
} from 'date-fns'

// Constant
import THEME_ALIGN from '../../../../constants/align'
import THEME_SIZE from '../../../../constants/size'

// UI
import ButtonToolbar from '../../../../atoms/button/toolbar/toolbar'
import Button from '../../../../atoms/button/button/button'
import Row from '../../../../atoms/grid/Row'

const args = {
  align: THEME_ALIGN.Start,
  size: THEME_SIZE.MD
}

const calculateCurrent = ({ currentDate, mode, status = 'current' }) => {
  const pCurrentDate = Date.parse(currentDate)
  switch (mode) {
    case 'month':
      switch (status) {
        case 'next':
          return addMonths(pCurrentDate, 1)
        case 'prev':
          return subMonths(pCurrentDate, 1)
        // since current is default, current case has no benefit
        default:
          return `${format(pCurrentDate, 'MMMM')} Of ${format(pCurrentDate, 'y')}`
      }

    case 'week':
      switch (status) {
        case 'next':
          return addWeeks(pCurrentDate, 1)
        case 'prev':
          return subWeeks(pCurrentDate, 1)
        // since current is default, current case has no benefit
        default: {
          const formatDate = daysToWeeks(format(new Date(pCurrentDate), 'd')) + 1
          return `${formatDate} Week Of ${format(pCurrentDate, 'MMMM')} ${format(
            pCurrentDate,
            'y'
          )}`
        }
      }
    case 'day':
      switch (status) {
        case 'next':
          return addDays(pCurrentDate, 1)
        case 'prev':
          return subDays(pCurrentDate, 1)
        // since current is default, current case has no benefit
        default: {
          return `${format(pCurrentDate, 'd')}  ${format(pCurrentDate, 'MMMM')}  ${format(
            pCurrentDate,
            'y'
          )}`
        }
      }
    // since we get year as default, no need to have year switch
    default:
      switch (status) {
        case 'next':
          return addYears(pCurrentDate, 1)
        case 'prev':
          return subYears(pCurrentDate, 1)
        // since current is default, current case has no benefit
        default: {
          return format(pCurrentDate, 'y')
        }
      }
  }
}

const handleChangeDate = ({ currentDate, mode, setCurrentDate, status }) => {
  const current = calculateCurrent({ currentDate, mode, status })
  setCurrentDate(current.toISOString())
}

export default ({ currentDate, mode, setCurrentDate }) => {
  const current = calculateCurrent({ currentDate, mode, status: 'current' })

  return (
    <Row justify={'center'}>
      <ButtonToolbar {...args}>
        <Button
          onClick={() => handleChangeDate({ currentDate, mode, setCurrentDate, status: 'prev' })}
        >
          &lt;
        </Button>

        <Button>{current}</Button>

        <Button
          onClick={() => handleChangeDate({ currentDate, mode, setCurrentDate, status: 'next' })}
        >
          &gt;
        </Button>
      </ButtonToolbar>
    </Row>
  )
}
