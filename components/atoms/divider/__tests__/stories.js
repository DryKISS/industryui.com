/**
 * Divider
 */

// React
import React from 'react'

// UI
import { Divider } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Divider />

defaultStory.story = {
  name: 'Default'
}

export const medium = () => <Divider size='md' />

export const large = () => <Divider size='lg' />
