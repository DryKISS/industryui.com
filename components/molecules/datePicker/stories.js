/**
 * Date Picker
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { DatePicker } from './'
import Readme from './README.md'

storiesOf('Molecules/Date Picker', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <DatePicker
      change={() => {}}
      month={''}
      year={''}
    />
  )
