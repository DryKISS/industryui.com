/**
 * Table
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Table } from '../'
import Readme from '../README.md'
import {
  columns,
  columnsActions,
  columnsFormatter,
  rowClick,
  rows,
  rowsContext
} from '../__mocks__/default'

const data = rows.data
const dataContext = rowsContext.data

export default {
  title: 'Molecules/Table',
  component: Table,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Table columns={columns} rows={data} />

export const caption = () => <Table caption='Captioned Tabled' columns={columns} rows={data} />

export const context = () => <Table columns={columns} rows={dataContext} />

export const responsive = () => (
  <div style={{ width: '250px' }}>
    <Table columns={columns} rows={data} />
  </div>
)

export const notResponsive = () => (
  <div style={{ width: '100px' }}>
    <Table columns={columns} responsive={false} rows={data} />
  </div>
)

export const notStriped = () => <Table columns={columns} rows={data} striped={false} />

export const notHover = () => <Table columns={columns} hover={false} rows={data} />

export const noColumns = () => <Table rows={data} />

export const rowClickStory = () => <Table columns={columns} rowClick={rowClick} rows={data} />

export const align = () => <Table align columns={columns} rows={data} />

export const formatter = () => <Table columns={columnsFormatter} rows={data} />

export const actions = () => <Table columns={columnsActions} rows={data} />
