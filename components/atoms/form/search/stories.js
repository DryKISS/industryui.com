/**
 * Search
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// UI
import { Search } from '../'
import Readme from './README.md'

storiesOf('Atoms/Form/Search', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Search onSearch={action('query')} />
  )

  .add('With placeholder', () =>
    <Search placeholder='Company name' onSearch={action('query')} />
  )

  .add('With default value', () =>
    <Search value='XYZ' onSearch={action('query')} />
  )

  .add('With custom label', () =>
    <Search label='Go' onSearch={action('query')} />
  )
