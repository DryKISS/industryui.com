/**
 * Table
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Component
import { Table } from './'
import Readme from './README.md'

const columns = [
  {
    text: 'Column1'
  },
  {
    text: 'Column2'
  }
]

storiesOf('Molecules/Table', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Table columns={columns} />
  )
