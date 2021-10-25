import React from 'react'
import {
  addDays,
  addYears,
  addMonths,
  addWeeks,
  daysToWeeks,
  format,
  subDays,
  subMonths,
  subYears,
  subWeeks
} from 'date-fns'
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import Button from '../../../atoms/button/button/button'

import THEME_ALIGN from '../../../constants/align'
import THEME_SIZE from '../../../constants/size'

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
        return format(pCurrentDate, 'MMMM')
      } else if (status === 'next') {
        return addMonths(pCurrentDate, 1)
      } else if (status === 'prev') {
        return subMonths(pCurrentDate, 1)
      }
      break
    case 'week':
      if (status === 'current') {
        const formatDate = daysToWeeks(format(new Date(pCurrentDate), 'd')) + 1
        return `${formatDate}th Week Of ${format(pCurrentDate, 'MMMM')}`
      } else if (status === 'next') {
        return addWeeks(pCurrentDate, 1)
      } else if (status === 'prev') {
        return subWeeks(pCurrentDate, 1)
      }
      break
    case 'day':
      if (status === 'current') {
        return `${format(pCurrentDate, 'd')}  ${format(pCurrentDate, 'MMMM')}`
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

export const ColumnPagination = ({ setCurrentDate, mode, currentDate }) => {
  const current = calculateCurrent(currentDate, mode, 'current')
  return (
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
  )
}
