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
import { Default } from '../__mocks__/navbar'

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

export const contained = () => <BaseComponent contained widgets={Default} />
