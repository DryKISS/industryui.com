/**
 * Textarea
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Textarea, Label } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Textarea', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Label text='Enter the message below'>
      <Textarea value='this is text area' />
    </Label>
  )
