/**
 * Navbar - Brand
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Navbar } from 'components'
import { BaseComponent } from './baseComponent'
import Readme from '../README.md'

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const brand = () => <BaseComponent />
