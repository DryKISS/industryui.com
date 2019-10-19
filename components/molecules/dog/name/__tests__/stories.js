/**
 * Dog - Name
 */

// React
import React from 'react'

// Component
import { DogName } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Dog/Name',
  component: DogName,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <DogName row={{ gender: 'male', name: 'DogName' }} />

defaultStory.story = {
  name: 'Default'
}
