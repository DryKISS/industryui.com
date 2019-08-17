/**
 * Table
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Component
import { TableDogs } from './'
import Readme from './README.md'

const columns = [
  {
    text: 'Column1'
  },
  {
    text: 'Column2'
  }
]

// Story
storiesOf('Molecules/Dog/Table', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <TableDogs columns={columns} />
  )
