/**
 * Figure
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Figure } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Figure',
  component: Figure,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Figure />
