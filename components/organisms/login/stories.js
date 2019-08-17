/**
 * Login
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Login } from './'
import Readme from './README.md'

storiesOf('Organisms/Login', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Login />
  )
