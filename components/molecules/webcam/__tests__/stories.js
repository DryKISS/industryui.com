/**
 * Webcam
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Webcam } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Webcam',
  component: Webcam,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Webcam />
