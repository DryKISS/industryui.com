import React from 'react'
import { camelCase, groupBy } from 'lodash'
import {
  addYears,
  addMonths,
  addWeeks,
  addDays,
  daysToWeeks,
  format,
  getWeek,
  getDate,
  endOfYear,
  endOfWeek,
  endOfMonth,
  endOfDay,
  startOfMonth,
  startOfWeek,
  startOfDay,
  startOfYear,
  subWeeks,
  subDays,
  subYears,
  subMonths
} from 'date-fns'
// UI
import ButtonToolbar from '../../../atoms/button/toolbar/toolbar'
import Button from '../../../atoms/button/button/button'
import Row from '../../../atoms/grid/Row'
// Constant
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

const generateDate = (type, arr) => {
  switch (type) {
    case 'day':
      for (const key of Array(12).keys()) {
        arr[key + 1] = 0
      }
      return arr
    case 'week': {
      const week = ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']
      week.forEach((item) => {
        arr[item] = 0
      })
      return arr
    }
    case 'month': {
      for (const key of Array(4).keys()) {
        arr[`week${key + 1}`] = 0
      }
      return arr
    }
    case 'year': {
      const month = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec'
      ]
      month.forEach((item) => {
        arr[item] = 0
      })
      return arr
    }
  }
}

const groupByDateCriteria = (type, timingStart) => {
  switch (type) {
    case 'day':
      return format(new Date(timingStart), 'h').toLowerCase()
    case 'week':
      return format(new Date(timingStart), 'iii').toLowerCase()
    case 'month':
      return `week${daysToWeeks(format(new Date(timingStart), 'd')) + 1}`
    case 'year':
      return format(new Date(timingStart), 'LLL').toLowerCase()
  }
}

// calculate last line of table as total
const calculateTotalRows = (result, events, title) => {
  const calTotal = result.pop()
  calTotal[title] = 'Total'
  const isNumber = (value) => /^[-]?\d+$/.test(value)
  result.forEach((item) => {
    ;(Object.keys(item) || []).forEach((i) => {
      if (i !== events) {
        if (Array.isArray(calTotal[i])) {
          calTotal[i] = calTotal[i][0]
        }

        if (isNumber(item[i])) calTotal[i] = (calTotal[i] || 0) + Number(item[i])
        else if (Array.isArray(item[i])) calTotal[i] = (calTotal[i] || 0) + Number(item[i][0])
      }
    })
  })
  Object.keys(calTotal).forEach((k) => {
    if (isNumber(calTotal[k])) {
      calTotal[k] = calTotal[k].toString()
    }
  })
  result.push(calTotal)
}

const prepareRag = (items, flag) => {
  if (!items.find((item) => item[flag])) {
    return null
  }

  return items.find((item) => item[flag] === 'danger') ? 'danger' : 'success'
}

const failCount = (Items, flag) => {
  const count = Items.filter((item) => item[flag] === 'danger').length
  return count ? `${count} Failed items` : ''
}

export const prepareHiddenColumn = (hiddenColumn) => {
  const result = {}
  hiddenColumn.forEach((item) => {
    result[item] = true
  })
  return result
}

export const ColumnPagination = ({ setCurrentDate, mode, currentDate }) => {
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

export const filterDateCriteria = (type, timingStart) => {
  switch (type) {
    case 'day':
      return getDate(new Date(timingStart)) === getDate(new Date())
    case 'week':
      return getWeek(new Date(timingStart)) === getWeek(new Date())
    case 'month':
      return new Date(timingStart).getMonth() === new Date().getMonth()
    case 'year':
      return new Date(timingStart).getFullYear() === new Date().getFullYear()
  }
}

export const generateFilterDate = (status, date) => {
  switch (status) {
    case 'year':
      return {
        startDate: startOfYear(new Date(date)).toISOString(),
        endDate: endOfYear(new Date(date)).toISOString()
      }
    case 'month':
      return {
        startDate: startOfMonth(new Date(date)).toISOString(),
        endDate: endOfMonth(new Date(date)).toISOString()
      }
    case 'week':
      return {
        startDate: startOfWeek(new Date(date)).toISOString(),
        endDate: endOfWeek(new Date(date)).toISOString()
      }
    case 'day':
      return {
        startDate: startOfDay(new Date(date)).toISOString(),
        endDate: endOfDay(new Date(date)).toISOString()
      }
  }
}

export const prepareScheduleRows = (mode = 'year', options) => {
  let arr = []

  const { currentDataSource, events, generateColumn, eventTimeSplitting, flag, title } = options
  if (!currentDataSource.length) return []
  const result =
    currentDataSource.map((item) => {
      const currentDateTime = item[events] || []
      // get the generated column as a pattern and create rows base object
      // to assign to table
      generateColumn.forEach((i, index) => {
        let key = ''
        if (typeof i?.text === 'string') {
          key = camelCase(i?.text)
        } else {
          key = 'function'
        }
        arr[`${key}`] = item[key] ? item[key] : null
      })

      arr.count = currentDateTime?.length || 0
      arr = generateDate(mode, arr)

      const groupedJobs = groupBy(currentDateTime, (i) =>
        groupByDateCriteria(mode, i[eventTimeSplitting])
      )

      Object.keys(groupedJobs).forEach((item) => {
        groupedJobs[item] = [
          groupedJobs[item]?.length || 0,
          prepareRag(groupedJobs[item], flag),
          failCount(groupedJobs[item], flag)
        ]
      })

      return { ...arr, ...groupedJobs }
    }) || []

  if (result.length > 0) {
    calculateTotalRows(result, events, title)
  }
  return result
}
