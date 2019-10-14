/**
 * Figure
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Figure } from './'
import Readme from './README.md'

storiesOf('Atoms/Figure', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Figure />
  )
