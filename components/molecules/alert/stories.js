/**
 * Alert
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Alert } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Alert', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Alert />
    )
  )
