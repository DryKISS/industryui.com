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

const calculateCurrent = (currentDate, mode, status = 'current') => {
  const pCurrentDate = Date.parse(currentDate)
  switch (mode) {
    case 'year':
      if (status === 'current') {
        return format(pCurrentDate, 'y')
      } else if (status === 'next') {
        return addYears(pCurrentDate, 1)
      } else if (status === 'prev') {
        return subYears(pCurrentDate, 1)
      }
      break
    case 'month':
      if (status === 'current') {
        return `${format(pCurrentDate, 'MMMM')} Of ${format(pCurrentDate, 'y')}`
      } else if (status === 'next') {
        return addMonths(pCurrentDate, 1)
      } else if (status === 'prev') {
        return subMonths(pCurrentDate, 1)
      }
      break
    case 'week':
      if (status === 'current') {
        const formatDate = daysToWeeks(format(new Date(pCurrentDate), 'd')) + 1
        return `${formatDate} Week Of ${format(pCurrentDate, 'MMMM')} ${format(pCurrentDate, 'y')}`
      } else if (status === 'next') {
        return addWeeks(pCurrentDate, 1)
      } else if (status === 'prev') {
        return subWeeks(pCurrentDate, 1)
      }
      break
    case 'day':
      if (status === 'current') {
        return `${format(pCurrentDate, 'd')}  ${format(pCurrentDate, 'MMMM')}  ${format(
          pCurrentDate,
          'y'
        )}`
      } else if (status === 'next') {
        return addDays(pCurrentDate, 1)
      } else if (status === 'prev') {
        return subDays(pCurrentDate, 1)
      }
  }
}

const handleChangeDate = (setCurrentDate, options) => {
  const { currentDate, mode, status } = options
  const current = calculateCurrent(currentDate, mode, status)
  setCurrentDate(current.toISOString())
}

export default ({ setCurrentDate, mode, currentDate }) => {
  const current = calculateCurrent(currentDate, mode, 'current')
  return (
    <Row justify={'center'}>
      <ButtonToolbar {...args}>
        <Button
          onClick={() => handleChangeDate(setCurrentDate, { currentDate, mode, status: 'prev' })}
        >
          &lt;
        </Button>
        <Button>{current}</Button>
        <Button
          onClick={() => handleChangeDate(setCurrentDate, { currentDate, mode, status: 'next' })}
        >
          &gt;
        </Button>
      </ButtonToolbar>
    </Row>
  )
}
