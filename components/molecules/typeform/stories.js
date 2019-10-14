/**
 * Typeform
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Typeform } from './'
import Readme from './README.md'

storiesOf('Molecules/Typeform', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Typeform tags={[]} />
  )
