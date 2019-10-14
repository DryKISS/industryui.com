/**
 * Notification
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Notification } from '../'
import Readme from '../README.md'

storiesOf('Molecules/Notification', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Notification />
  )
