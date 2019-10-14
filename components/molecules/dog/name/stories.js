/**
 * Dog - Name
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Component
import { DogName } from './'
import Readme from './README.md'

storiesOf('Molecules/Dog/Name', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <DogName row={{ gender: 'male', name: 'DogName' }} />
  )
