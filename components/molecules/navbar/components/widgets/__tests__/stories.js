/**
 * Navbar - Widgets
 */

// React
import React from 'react'

// UI
import { Navbar } from '../../'
import Readme from '../../../README.md'

import { Brand } from 'config'

export default {
  title: 'Molecules/Navbar/Widgets',
  component: Navbar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Navbar brand={Brand.logo} />
