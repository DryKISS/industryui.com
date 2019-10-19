/**
 * Icon
 */

// React
import React from 'react'

// UI
import { Icon } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Icon icon='times-circle' />

defaultStory.story = {
  name: 'Default'
}
