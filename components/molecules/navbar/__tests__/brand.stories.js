/**
 * Navbar - Brand
 */

// React
import React from 'react'

// UI
import BaseComponent from './baseComponent'
import OPTIONS from './options'
import Readme from '../README.md'

export default {
  title: 'Molecules/Navbar/Brand',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  ...OPTIONS
}

export const brand = () => <BaseComponent />
