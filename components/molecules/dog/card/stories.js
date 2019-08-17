/**
 * Dog - Card
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// Component
import { DogCard } from './'
import Readme from './README.md'

// Story
storiesOf('Molecules/Dog/Card', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <DogCard
      breed='Cockapoo'
      breeder='Breeder'
      breedName='Cockapoo'
      dogId='id'
      gender='male'
      // image='/image.png'
      name='DogName'
      price={1000}
    />
  )
