/**
 * Navbar - Brand
 */

// React
import React from 'react'

// UI
import { BaseComponent, options } from './baseComponent'
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
  ...options
}

export const brand = () => <BaseComponent />
