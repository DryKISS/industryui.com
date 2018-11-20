/**
 * Forgot Details Reset
 */
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import ForgotDetailsReset from './'
import Readme from './README.md'

storiesOf('Organisms/Forgot Details Reset', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <ForgotDetailsReset />
    )
  )
