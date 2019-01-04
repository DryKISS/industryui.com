/**
 * Date Picker
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { DatePicker } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Date Picker', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <DatePicker />
    )
  )
