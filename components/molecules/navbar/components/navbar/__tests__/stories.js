/**
 * Navbar - Navbar
 */

// React
import React from 'react'

// UI
import { Navbar } from '../../'
import Readme from '../../../README.md'

// Data
import { Default } from '../../../__mocks__'

// Config
import { Brand } from 'config'

export default {
  title: 'Molecules/Navbar/Navbar',
  component: Navbar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Navbar brand={Brand.logo} widgets={Default} />
