/**
 * Tooltip
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Tooltip } from './'
import Readme from './README.md'

storiesOf('Molecules/Tooltip', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Tooltip />
  )
