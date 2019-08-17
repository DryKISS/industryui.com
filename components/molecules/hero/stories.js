/**
 * Hero
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Hero
import { Hero } from './'
import Readme from './README.md'

storiesOf('Molecules/Hero', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Hero content='Find your best friend' />
  )
