/**
 * Table
 */

// React
import React from 'react'

// Component
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
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Table columns={columns} rows={data} />

defaultStory.story = {
  name: 'Default'
}

export const captionStory = () => (
  <Table caption='Captioned Tabled' columns={columns} rows={data} />
)

captionStory.story = {
  name: 'Caption'
}

export const context = () => <Table columns={columns} rows={dataContext} />

export const responsiveStory = () => (
  <div style={{ width: '250px' }}>
    <Table columns={columns} rows={data} />
  </div>
)

responsiveStory.story = {
  name: 'Responsive'
}

export const notResponsive = () => (
  <div style={{ width: '100px' }}>
    <Table columns={columns} responsive={false} rows={data} />
  </div>
)

export const notStriped = () => <Table columns={columns} rows={data} striped={false} />

export const notHover = () => <Table columns={columns} hover={false} rows={data} />

export const noColumns = () => <Table rows={data} />

export const rowClickStory = () => <Table columns={columns} rowClick={rowClick} rows={data} />

rowClickStory.story = {
  name: 'Row Click'
}

export const alignStory = () => <Table align columns={columns} rows={data} />

alignStory.story = {
  name: 'Align'
}

export const formatter = () => <Table columns={columnsFormatter} rows={data} />

export const actions = () => <Table columns={columnsActions} rows={data} />
