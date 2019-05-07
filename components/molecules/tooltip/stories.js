/**
 * Tooltip
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Tooltip } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Tooltip', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Tooltip />
    )
  )
