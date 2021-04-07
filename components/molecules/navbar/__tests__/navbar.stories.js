/**
 * Navbar - Navbar
 */

// React
import React from 'react'

// UI
import { BaseComponent, options } from './baseComponent'
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
  ...options
}

export const navbar = () => <BaseComponent widgets={DEFAULT} />
