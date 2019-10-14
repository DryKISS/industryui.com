/**
 * Section
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Section } from './'
import Readme from './README.md'

storiesOf('Molecules/Section', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Section
      heading='Section Heading'
    />
  )
