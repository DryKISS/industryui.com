/**
 * Tooltip
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Tooltip } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Tooltip />
