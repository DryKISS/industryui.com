/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import Avatar from '../../'
import Readme from './README.md'

storiesOf('Atoms/Avatar', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Avatar />
    )
  )
