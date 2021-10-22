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
  switch (mode) {
    case 'year':
      if (status === 'current') {
        return format(currentDate, 'y')
      } else if (status === 'next') {
        return addYears(currentDate, 1)
      } else if (status === 'prev') {
        return subYears(currentDate, 1)
      }
      break
    case 'month':
      if (status === 'current') {
        return format(currentDate, 'MMMM')
      } else if (status === 'next') {
        return addMonths(currentDate, 1)
      } else if (status === 'prev') {
        return subMonths(currentDate, 1)
      }
      break
    case 'week':
      if (status === 'current') {
        const formatDate = daysToWeeks(format(new Date(currentDate), 'd')) + 1
        return `${formatDate}th Week Of ${format(currentDate, 'MMMM')}`
      } else if (status === 'next') {
        return addWeeks(currentDate, 1)
      } else if (status === 'prev') {
        return subWeeks(currentDate, 1)
      }
      break
    case 'day':
      if (status === 'current') {
        return `${format(currentDate, 'd')}  ${format(currentDate, 'MMMM')}`
      } else if (status === 'next') {
        return addDays(currentDate, 1)
      } else if (status === 'prev') {
        return subDays(currentDate, 1)
      }
  }
}

const handleChangeDate = (setCurrentDate, options) => {
  const { currentDate, mode, status } = options
  const current = calculateCurrent(currentDate, mode, status)
  setCurrentDate(current)
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
