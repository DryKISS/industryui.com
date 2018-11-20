/**
 * Progress
 */

import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

import Progress from './'
import Readme from './README.md'

storiesOf('Atoms/Progress', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Progress />
    )
  )
