/**
 * Pagination
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Pagination } from './'
import Readme from './README.md'

storiesOf('Molecules/Pagination', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Primary', () =>
    <Pagination
      onPageChange={() => {}}
    />
  )
