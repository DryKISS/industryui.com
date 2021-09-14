/**
 * Components - Molecules - Navbar - Story
 */

// React
import React, { useContext } from 'react'

// Storybook
import CleverlyTheme from '../../../../.storybook/themes/cleverly'

// Style
import { ThemeProvider } from 'styled-components'

// UI
import ConfigContext from '../../../services/config/context'
import Navbar from '../navbar'
import Readme from '../README.md'

// Data
import DEFAULT from '../__mocks__/navbar'

export default {
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Navbar'
}

const BaseComponent = (args) => {
  const { config } = useContext(ConfigContext)
  const { Brand } = config

  return <Navbar {...args} brand={Brand.logo} />
}

export const Main = (args) => <BaseComponent {...args} widgets={DEFAULT} />
export const Theme = (args) => <BaseComponent {...args} widgets={DEFAULT} />

Theme.decorators = [
  (Story) => (
    <ThemeProvider theme={CleverlyTheme}>
      <Story />
    </ThemeProvider>
  )
]
