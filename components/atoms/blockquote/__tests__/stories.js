/**
 * Blockquote
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Blockquote } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Blockquote',
  component: Blockquote,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Blockquote footer='Footer Text' text='Title Text' />
