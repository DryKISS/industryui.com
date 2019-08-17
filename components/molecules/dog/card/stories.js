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
import vizla from './__resources__/vizla.jpg'

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
      image={vizla}
      name='DogName'
      price={1000}
    />
  )
