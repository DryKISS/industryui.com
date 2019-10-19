/**
 * Image
 */

// React
import React from 'react'

// UI
import { Image } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Image alt='Ian Warner' src='http://via.placeholder.com/350x150' />
)

defaultStory.story = {
  name: 'Default'
}
