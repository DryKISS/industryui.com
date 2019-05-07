/**
 * Figure
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Figure } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Figure', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Figure />
    )
  )
