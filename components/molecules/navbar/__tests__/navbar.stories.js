/**
 * Navbar - Navbar
 */

// React
import React from 'react'

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

// Data
import { Default } from '../__mocks__/navbar'

export default {
  title: 'Molecules/Navbar',
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  ...options
}

export const navbar = () => <BaseComponent widgets={Default} />
