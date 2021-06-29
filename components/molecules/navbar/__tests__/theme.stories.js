/**
 * Navbar - Tests
 */

// React
import React from 'react'

// Storybook
import { CleverlyTheme, CleverlyAdminTheme, DryKISSTheme } from '../../../../.storybook/themes'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import BaseComponent from './baseComponent'
import OPTIONS from './options'
import Readme from '../README.md'

// Data
import { Default } from '../__mocks__/navbar'

export default {
  title: 'Molecules/Navbar/Theme',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  ...OPTIONS
}

export const Cleverly = () => (
  <ThemeProvider theme={CleverlyTheme}>
    <BaseComponent widgets={Default} />
  </ThemeProvider>
)

export const CleverlyAdmin = () => (
  <ThemeProvider theme={CleverlyAdminTheme}>
    <BaseComponent widgets={Default} />
  </ThemeProvider>
)

export const Drykiss = () => (
  <ThemeProvider theme={DryKISSTheme}>
    <BaseComponent widgets={Default} />
  </ThemeProvider>
)
