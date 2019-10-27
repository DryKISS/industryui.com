/**
 * Badge
 */

// React
import React from 'react'

// UI
import { Badge } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Badge content='Ian Warner' />

defaultStory.story = {
  name: 'Default'
}
