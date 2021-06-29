/**
 * Navbar - Tests
 */

// React
import React from 'react'

// Storybook
import { CleverlyTheme } from '../../../../.storybook/themes/cleverly'
import { CleverlyAdminTheme } from '../../../../.storybook/themes/cleverlyAdmin'
import { DryKISSTheme } from '../../../../.storybook/themes/drykiss'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import BaseComponent from './baseComponent'
import OPTIONS from './options'
import Readme from '../README.md'

// Data
import DEFAULT from '../__mocks__/navigation'

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
    <BaseComponent widgets={DEFAULT} />
  </ThemeProvider>
)

export const CleverlyAdmin = () => (
  <ThemeProvider theme={CleverlyAdminTheme}>
    <BaseComponent widgets={DEFAULT} />
  </ThemeProvider>
)

export const Drykiss = () => (
  <ThemeProvider theme={DryKISSTheme}>
    <BaseComponent widgets={DEFAULT} />
  </ThemeProvider>
)
