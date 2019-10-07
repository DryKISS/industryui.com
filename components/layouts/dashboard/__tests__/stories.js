/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Dashboard } from '../'
import Readme from '../README.md'

const meta = {
  canonical: 'dashboard',
  description: 'Dashboard',
  title: 'Dashboard'
}

storiesOf('Layouts/Dashboard', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Dashboard
      error={{ message: 'Error 404' }}
      heading='Default'
      meta={meta}
      success
    >
      Dashboard Layout
    </Dashboard>
  )
