/**
 * Blockquote
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Blockquote } from './'
import Readme from './README.md'

storiesOf('Atoms/Blockquote', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Primary', () =>
    <Blockquote footer='Footer Text' text='Title Text' />
  )
