/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { number, withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Avatar } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Avatar content='Avatar' context={Context()} size={number('Size', 60)} />
