/**
 * Divider
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Divider } from './'
import Readme from './README.md'

storiesOf('Atoms/Divider', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Divider />
  )

  .add('Medium', () =>
    <Divider size='md' />
  )

  .add('Large', () =>
    <Divider size='lg' />
  )

  .add('Custom Colour', () =>
    <Divider colour='red' size='lg' />
  )
