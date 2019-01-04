/**
 * Login
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Login } from '../../'
import Readme from './README.md'

storiesOf('Organisms/Login', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Login />
    )
  )
