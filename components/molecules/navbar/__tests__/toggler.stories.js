/**
 * Navbar - Toggler
 */

// React
import React from 'react'

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

export default {
  title: 'Molecules/NavbarToggler',
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  ...options
}

export const toggler = () => <BaseComponent visible />
