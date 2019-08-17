/**
 * Dropzone
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Dropzone } from './'
import Readme from './README.md'

storiesOf('Molecules/Dropzone', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Dropzone />
  )
