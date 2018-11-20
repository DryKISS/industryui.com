/**
 * Date
 */

// React
import React from 'react'

// Stroybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Date from './'
import Readme from './README.md'

storiesOf('Atoms/Date', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Date date='19th Sept 1974' />
    )
  )
