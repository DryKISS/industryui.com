/**
 * Navbar - Navbar
 */

// React
import React from 'react'

// UI
import BaseComponent from './baseComponent'
import OPTIONS from './options'
import Readme from '../README.md'

// Data
import DEFAULT from '../__mocks__/navigation'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Navbar',
  ...OPTIONS
}

export const navbar = () => <BaseComponent widgets={DEFAULT} />
