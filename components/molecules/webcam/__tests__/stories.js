/**
 * Webcam
 */

// React
import React from 'react'

// UI
import { Webcam } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Webcam',
  component: Webcam,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Webcam />

defaultStory.story = {
  name: 'Default'
}
