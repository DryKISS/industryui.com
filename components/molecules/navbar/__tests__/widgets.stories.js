/**
 * Navbar - Widgets
 */

// React
import React from 'react'

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

export default {
  title: 'Molecules/Navbar/Widgets',
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  ...options
}

export const widgets = () => <BaseComponent />
