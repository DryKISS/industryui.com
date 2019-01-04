/**
 * Input
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Input } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Input', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Input label="Email" placeholder="Enter your email" />
    )
  )
