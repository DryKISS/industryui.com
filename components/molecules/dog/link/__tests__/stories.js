/**
 * Dog - Link
 */

// React
import React from 'react'

// Component
import { DogLink } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Dog/Link',
  component: DogLink,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <DogLink name='DogName' />

defaultStory.story = {
  name: 'Default'
}
