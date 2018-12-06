/**
 * Dashboard
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Dashboard } from '../../'
import Readme from './README.md'

storiesOf('Pages/Dashboard', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Dashboard />
    )
  )
