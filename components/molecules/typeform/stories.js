/**
 * Typeform
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Typeform } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Typeform', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Typeform tags={[]} />
    )
  )
