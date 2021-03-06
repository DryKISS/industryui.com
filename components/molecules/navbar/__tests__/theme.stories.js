/**
 * Navbar - Tests
 */

// React
import React from 'react'

// Storybook
import { CleverlyTheme, CleverlyAdminTheme, DryKISSTheme } from '../../../../.storybook/themes'

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

// Style
import { ThemeProvider } from 'styled-components'

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
  ...options
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
