/**
 * Components - Molecules - Table - Story
 */

// React
import React, { useState } from 'react'

// UI
import { Table } from '../components/wrapper'
import Readme from '../README.md'

// Data
import { columnsActions, noCols, rows, rowsContext } from '../__mocks__/default'
const dataContext = rowsContext.data

export default {
  args: {
    align: false,
    caption: 'Caption goes here',
    className: '',
    fullHeight: false,
    hover: true,
    loading: false,
    noBorder: false,
    pagination: true,
    perPage: 10,
    responsive: true,
    striped: true
  },
  argTypes: {
    rowClick: {
      action: 'clicked'
    }
  },
  component: Table,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Table'
}

const BaseComponent = (props = {}) => {
  const [currentPage, setCurrentPage] = useState(1)

  const [sort, setSort] = useState({
    item: 'company',
    order: 'asc'
  })

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const data = [
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data,
    ...rows.data
  ]

  const pageSlice = data.slice(
    (currentPage - 1) * props.perPage,
    currentPage * props.perPage
  )

  const defaultProps = {
    paginationProps: {
      currentPage: currentPage,
      onPageChange: handlePageChange,
      pageCount: Math.ceil(data.length / props.perPage),
      perPage: props.perPage
    },
    rows: props.rows || pageSlice,
    setSort: setSort,
    sort: sort,
    ...props
  }

  if (props.columns === false || props.columns === null) {
    delete defaultProps.columns
  }

  return <Table {...defaultProps} />
}

export const main = (args) => (
  <BaseComponent {...args} columns={columnsActions} />
)
export const context = (args) => (
  <BaseComponent {...args} pagination={false} rows={dataContext} />
)
export const loadingWithoutData = (args) => (
  <BaseComponent {...args} rows={[]} loading />
)

export const showNoData = (args) => <BaseComponent {...args} rows={[]} />

export const noColumns = (args) => (
  <BaseComponent {...args} columns={false} pagination={false} rows={noCols} />
)
