/**
 * Forgot Details
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { ForgotDetails } from './'
import Readme from './README.md'

storiesOf('Organisms/Forgot Details', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <ForgotDetails />
  )
