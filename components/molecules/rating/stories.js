/**
 * Rating
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Rating } from './'
import Readme from './README.md'

storiesOf('Molecules/Rating', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Rating />
  )
