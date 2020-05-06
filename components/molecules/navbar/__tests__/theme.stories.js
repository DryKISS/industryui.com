/**
 * Navbar - Tests
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Navbar } from 'components'
import { BaseComponent } from './baseComponent'
import Readme from '../README.md'

// Style
import { ThemeProvider } from 'styled-components'

// Data
import { Default } from '../__mocks__'

const NAVBAR = {
  background: '#000',
  colourActive: '#fff',
  colourHover: '#aaa',
  height: '4rem'
}

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

export const main = () => (
  <ThemeProvider theme={{ NAVBAR }}>
    <BaseComponent contained widgets={Default} />
  </ThemeProvider>
)
