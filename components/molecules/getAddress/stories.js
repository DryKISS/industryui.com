/**
 * Get Address
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { GetAddress } from '../../'
import Readme from './README.md'

storiesOf('Molecules/Get Address', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <GetAddress />
    )
  )
