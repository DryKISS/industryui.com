/**
 * CLose
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Close } from './'
import Readme from './README.md'

storiesOf('Atoms/Close', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Close />
  )
