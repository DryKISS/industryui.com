/**
 * Get Address
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { GetAddress } from './'
import Readme from './README.md'

storiesOf('Molecules/Get Address', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <GetAddress />
  )
