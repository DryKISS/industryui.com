/**
 * Navbar - Contained
 */

// React
import React from 'react'

// UI
import { Navbar } from '../../'
import Readme from '../../../README.md'

// Data
import { Default } from '../../../__mocks__'

export default {
  title: 'Molecules/Navbar/Contained',
  component: Navbar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Navbar contained links={Default} />
