/**
 * Navbar - Brand
 */

// React
import React from 'react'

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

export default {
  title: 'Molecules/Navbar',
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  ...options
}

export const brand = () => <BaseComponent />
