/**
 * Divider
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Divider } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Divider', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Divider />
    )
  )

  .add('Large',
    withInfo()(() =>
      <Divider size='lg' />
    )
  )

  .add('Medium',
    withInfo()(() =>
      <Divider size='md' />
    )
  )
