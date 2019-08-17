/**
 * Webcam
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Webcam } from './'
import Readme from './README.md'

storiesOf('Molecules/Webcam', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Webcam />
  )
