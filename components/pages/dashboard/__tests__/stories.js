/**
 * Dashboard
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Dashboard } from '../'
import Readme from '../README.md'

storiesOf('Pages/Dashboard', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Dashboard />
  )
