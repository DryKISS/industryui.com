/**
 * Register
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Register } from './'
import Readme from './README.md'

storiesOf('Organisms/Register', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Register />
  )
