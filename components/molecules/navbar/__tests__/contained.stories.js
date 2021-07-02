/**
 * Navbar - Contained
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
  title: 'Molecules/Navbar/Contained',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  ...OPTIONS
}

export const contained = () => <BaseComponent contained widgets={DEFAULT} />
