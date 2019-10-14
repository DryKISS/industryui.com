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

const Rows = [
  {
    name: 'Dog',
    breedName: 'Cockapoo',
    price: 1000,
    applications: 0,
    approved: 'Yes',
    dogId: 100,
    gender: 'male'
  }
]

storiesOf('Molecules/Dog/Table', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <TableDogs dogs={Rows} path='/' />
  )
