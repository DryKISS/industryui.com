/**
 * Components - Molecules - Table - Story
 */

// React
import React, { useState } from 'react'

// UI
import Table from '../table'
import Readme from '../README.md'

// Data
import { columns, columnsActions, noCols, rows, rowsContext } from '../__mocks__/default'
const dataContext = rowsContext.data

export default {
  args: {
    align: false,
    border: true,
    caption: '',
    className: '',
    draggableRows: true,
    fullHeight: false,
    hover: true,
    loading: false,
    pagination: true,
    paginationSize: false,
    perPage: 50,
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
  const [pageSize, setPageSize] = useState(props.perPage)

  const [sort, setSort] = useState({
    item: 'company',
    order: 'asc'
  })

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (perPage) => {
    setPageSize(perPage)
  }

  const data = [...rows.data]

  pageSize === Infinity && setPageSize(data.length)

  const pageSlice = data.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const defaultProps = {
    paginationProps: {
      currentPage: currentPage,
      onPageChange: handlePageChange,
      onPageSizeChange: handlePageSizeChange,
      pageCount: Math.ceil(data.length / pageSize),
      perPage: pageSize
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

export const main = (args) => <BaseComponent {...args} columns={columnsActions} />

export const context = (args) => (
  <BaseComponent {...args} columns={columns} pagination={false} rows={dataContext} />
)

export const loadingWithoutData = (args) => <BaseComponent {...args} rows={[]} loading />

export const showNoData = (args) => <BaseComponent {...args} rows={[]} />

export const noColumns = (args) => (
  <BaseComponent {...args} columns={false} pagination={false} rows={noCols} />
)
