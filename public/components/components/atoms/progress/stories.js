/**
 * Progress
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import Progress from '../../'
import Readme from './README.md'

storiesOf('Atoms/Progress', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Progress />
    )
  )
