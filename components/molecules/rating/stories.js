/**
 * Rating
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Rating } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Rating', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Rating />
    )
  )
