/**
 * Buttons
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Buttons } from './'
import Readme from './README.md'

storiesOf('Molecules/Buttons', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Buttons next nextText='Submit' />
  )
