/**
 * Dog - Link
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Component
import { DogLink } from './'
import Readme from './README.md'

// Story
storiesOf('Molecules/Dog/Link', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <DogLink name='DogName' />
  )
