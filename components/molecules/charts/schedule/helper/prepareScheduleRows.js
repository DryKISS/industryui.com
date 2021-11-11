import { groupBy } from 'lodash'
import { daysToWeeks, format } from 'date-fns'

import camelCase from '../../../../utils/camelCase/camelCase'
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

export default (mode = 'year', options) => {
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
          key = camelCase.camelize(i?.text)
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
