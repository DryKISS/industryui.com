/**
 * Navbar - Toggler
 */

// React
import React from 'react'

// UI
import { Toggler } from '../../../'
import { BaseComponent } from './baseComponent'
import Readme from '../README.md'

export default {
  component: Toggler,
  title: 'Molecules/Navbar/Toggler',
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
}

export const toggler = () => <BaseComponent visible />
