/**
 * Alert
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Alert } from './'
import Readme from './README.md'

storiesOf('Molecules/Alert', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Alert />
  )
