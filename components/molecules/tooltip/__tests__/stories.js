/**
 * Tooltip
 */

// React
import React from 'react'

// UI
import { Tooltip } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Tooltip />

defaultStory.story = {
  name: 'Default'
}
