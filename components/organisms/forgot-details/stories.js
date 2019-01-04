/**
 * Forgot Details
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { ForgotDetails } from '../../'
import Readme from './README.md'

storiesOf('Organisms/Forgot Details', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ForgotDetails />
    )
  )
