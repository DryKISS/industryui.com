/**
 * Table
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

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

storiesOf('Molecules/Table', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Table columns={columns} rows={data} />
  )

  .add('Caption', () =>
    <Table caption='Captioned Tabled' columns={columns} rows={data} />
  )

  .add('Context', () =>
    <Table columns={columns} rows={dataContext} />
  )

  .add('Responsive', () =>
    <div style={{ width: '250px' }}>
      <Table columns={columns} rows={data} />
    </div>
  )

  .add('Not Responsive', () =>
    <div style={{ width: '100px' }}>
      <Table columns={columns} responsive={false} rows={data} />
    </div>
  )

  .add('Not Striped', () =>
    <Table columns={columns} rows={data} striped={false} />
  )

  .add('Not Hover', () =>
    <Table columns={columns} hover={false} rows={data} />
  )

  .add('No Columns', () =>
    <Table rows={data} />
  )

  .add('Row Click', () =>
    <Table columns={columns} rowClick={rowClick} rows={data} />
  )

  .add('Align', () =>
    <Table align columns={columns} rows={data} />
  )

  .add('Formatter', () =>
    <Table columns={columnsFormatter} rows={data} />
  )

  .add('Actions', () =>
    <Table columns={columnsActions} rows={data} />
  )
