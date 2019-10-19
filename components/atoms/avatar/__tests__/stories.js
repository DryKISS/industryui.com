/**
 * Avatar
 */

// React
import React from 'react'

// UI
import { Avatar } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Avatar content='Avatar' />

defaultStory.story = {
  name: 'Default'
}
