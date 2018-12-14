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
import { Textarea } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Textarea', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Textarea value="this is text area" />
    )
  )
