/**
 * Progress
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Progress } from './'
import Readme from './README.md'

storiesOf('Atoms/Progress', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Progress width={30} />
  )
