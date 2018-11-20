/**
 * Forgot Details
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import ForgotDetails from './'
import Readme from './README.md'

storiesOf('Organisms/Forgot Details', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ForgotDetails />
    )
  )
