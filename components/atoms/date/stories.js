/**
 * Date
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Date } from './'
import Readme from './README.md'

storiesOf('Atoms/Date', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Date date='19th Sept 1974' />
  )
