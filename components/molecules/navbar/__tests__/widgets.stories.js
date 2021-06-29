/**
 * Navbar - Widgets
 */

// React
import React from 'react'

// UI
import BaseComponent from './baseComponent'
import OPTIONS from './options'
import Readme from '../README.md'

export default {
  title: 'Molecules/Navbar/Widgets',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  ...OPTIONS
}

export const widgets = () => <BaseComponent />
