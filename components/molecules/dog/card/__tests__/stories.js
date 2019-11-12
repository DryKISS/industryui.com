/**
 * Dog - Card
 */

// React
import React from 'react'

// Component
import { DogCard } from '../'
import Readme from '../README.md'
import vizla from '../__resources__/vizla.jpg'

export default {
  title: 'Molecules/Dog/Card',
  component: DogCard,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
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
