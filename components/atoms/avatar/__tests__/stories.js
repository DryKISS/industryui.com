/**
 * Avatar
 */

// React
import React from 'react'

// UI
import { Avatar } from '../'
import Readme from '../README.md'

import { number, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Avatar content='Avatar' size={number('Size', 60)} />

defaultStory.story = {
  name: 'Default'
}
