/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { number, withKnobs } from '@storybook/addon-knobs'

// UI
import { Avatar } from '../'
import Readme from '../README.md'

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

export const main = () => <Avatar content='Avatar' size={number('Size', 60)} />
