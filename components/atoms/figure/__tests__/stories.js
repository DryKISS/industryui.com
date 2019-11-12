/**
 * Figure
 */

// React
import React from 'react'

// UI
import { Figure } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Figure',
  component: Figure,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Figure />
