/**
 * Rating
 */

// React
import React from 'react'

// UI
import { Rating } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Rating',
  component: Rating,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Rating item={3} />

defaultStory.story = {
  name: 'Default'
}
