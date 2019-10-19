/**
 * Dropzone
 */

// React
import React from 'react'

// UI
import { Dropzone } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Dropzone />

defaultStory.story = {
  name: 'Default'
}
