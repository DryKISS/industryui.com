/**
 * Textarea
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Textarea, Label } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Textarea', module)

  .addDecorator(withReadme(Readme))

  .add('Default', withInfo()(() =>
    <Label text="Enter the message below">
      <Textarea />
    </Label>
    )
  )
