/**
 * Components - Organisms - Charts - Schedule Chart - Story
 */

// React
import React, { useState } from 'react'

// UI
import Schedule from '../scheduleChart'
import Readme from '../README.md'
import { EXTERNAL_SCHEDULE_DATA } from '../__mocks__/scheduleMock'
import formatPrice from '../../../../utils/formatPrice/formatPrice'
import Icon from '../../../../atoms/icon/icon/icon'
import Text from '../../../../atoms/text/text'
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
const handleClick = (e, column, key) => {
  console.log('handleClick', key)

  console.log('column', column)
}

const handleRowClick = (row) => {
  console.info('Row Click', row)
}

export const Main = (args) => {
  return (
    <Schedule
      {...args}
      dataSource={EXTERNAL_SCHEDULE_DATA}
      handleFetchData={({ startDate, endDate }) => console.log('hello', startDate, endDate)}
      initialMode="year"
      hiddenColumn={['id', 'costCustomer', 'costSupplier', 'serviceName', 'compliance', 'jobs']}
      events={'jobs'}
      flag={'rag'}
      title="serviceName"
      onTitleFormatter={({ row }) => (
        <>
          <Text size="sm">
            {row.compliance && <Icon context="info" icon="clipboard-check" />}
            {row.serviceName}
          </Text>
          {row.costCustomer && <Text size="xs">Customer: {formatPrice(row.costCustomer)}</Text>}
          {row.costSupplier && <Text size="xs">Supplier: {formatPrice(row.costSupplier)}</Text>}
        </>
      )}
      eventTimeSplitting={'timingStart'}
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
  return (
    <Schedule
      {...args}
      handleFetchData={({ startDate, endDate }) => EXTERNAL_SCHEDULE_DATA}
      initialData={EXTERNAL_SCHEDULE_DATA}
      initialMode="year"
      hiddenColumn={['id', 'costCustomer', 'costSupplier', 'serviceName', 'compliance', 'jobs']}
      events={'jobs'}
      flag={'rag'}
      title="serviceName"
      onTitleFormatter={({ row }) => (
        <>
          <Text size="sm">
            {row.compliance && <Icon context="info" icon="clipboard-check" />}
            {row.serviceName}
          </Text>
          {row.costCustomer && <Text size="xs">Customer: {formatPrice(row.costCustomer)}</Text>}
          {row.costSupplier && <Text size="xs">Supplier: {formatPrice(row.costSupplier)}</Text>}
        </>
      )}
      eventTimeSplitting={'timingStart'}
      handleRowClick={handleRowClick}
      onYearChange={handleYearChange}
      currentYear={currentYear}
      yearRange={[2020, 2021, 2022]}
    />
  )
}
