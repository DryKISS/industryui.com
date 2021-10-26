import React from 'react'
import { camelCase, groupBy } from 'lodash'
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
  subWeeks,
  getWeek,
  getDate
} from 'date-fns'
import Row from '../../../atoms/grid/Row'

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

// Generate Column Helpers

const generateDate = (type, arr) => {
  switch (type) {
    case 'day':
      for (const key of Array(12).keys()) {
        arr[key + 1] = 0
      }
      return arr
    case 'week': {
      const week = ['sat', 'sun', 'mon', 'tue', 'wed', 'thur', 'fri']
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

export const filterDateCriteria = (type, job) => {
  switch (type) {
    case 'day':
      return getDate(new Date(job.timingStart)) === getDate(new Date())
    case 'week':
      return getWeek(new Date(job.timingStart)) === getWeek(new Date())
    case 'month':
      return new Date(job.timingStart).getMonth() === new Date().getMonth()
    case 'year':
      return new Date(job.timingStart).getFullYear() === new Date().getFullYear()
  }
}

const groupByDateCriteria = (type, job) => {
  switch (type) {
    case 'day':
      return format(new Date(job.timingStart), 'h').toLowerCase()
    case 'week':
      return format(new Date(job.timingStart), 'E..EEE').toLowerCase()
    case 'month':
      return `week${daysToWeeks(format(new Date(job.timingStart), 'd')) + 1}`
    case 'year':
      return format(new Date(job.timingStart), 'LLL').toLowerCase()
  }
}

export const prepareResult = (type = 'year', dataSource, events, gColumn) => {
  let arr = []
  const result =
    dataSource.map((item) => {
      const currentMonthJobs = (item[events] || []).filter((job) => filterDateCriteria(type, job))

      gColumn.forEach((i, index) => {
        let key = ''
        if (typeof i?.text === 'string') {
          key = camelCase(i?.text)
        } else {
          key = 'function'
        }
        arr[`${key}`] = item[key] ? item[key] : null
      })

      arr.count = currentMonthJobs?.length || 0
      arr = generateDate(type, arr)

      const groupedJobs = groupBy(currentMonthJobs, (job) => groupByDateCriteria(type, job))

      Object.keys(groupedJobs).forEach((item) => {
        groupedJobs[item] = [
          groupedJobs[item]?.length || 0,
          prepareRag(groupedJobs[item]),
          failCount(groupedJobs[item])
        ]
      })

      const re = { ...arr, ...groupedJobs }
      return re
    }) || []

  if (result.length > 0) {
    // const calTotal = { task: 'Total', compliance: false }
    const calTotal = result.pop()
    calTotal.serviceName = 'Total'
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
  return result
}

export const prepareRag = (jobs) => {
  if (!jobs.find((job) => job.rag)) {
    return null
  }

  return jobs.find((job) => job.rag === 'danger') ? 'danger' : 'success'
}

const failCount = (jobs) => {
  const count = jobs.filter((job) => job.rag === 'danger').length
  return count ? `${count} Failed jobs` : ''
}
