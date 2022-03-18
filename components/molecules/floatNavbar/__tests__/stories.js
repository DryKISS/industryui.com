/**
 * Components - Molecules - FloatNavbar - Story
 */

// React
import React, { useContext } from 'react'

// Storybook
import CleverlyTheme from '../../../../.storybook/themes/cleverly'

// Style
import { ThemeProvider } from 'styled-components'

// UI
// import ConfigContext from '../../../services/config/context'
import FloatNavbar from '../floatNavbar'
import Readme from '../README.md'

// Data
import DEFAULT from '../__mocks__/floatNavbar'

export default {
  component: FloatNavbar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/FloatNavbar'
}

// const BaseComponent = (args) => {
//   // const { config } = useContext(ConfigContext)
//   const { Brand } = config

//   return <FloatNavbar {...args} />
// }

export const Main = (args) => <>test</>
// export const Theme = (args) => <BaseComponent {...args} widgets={DEFAULT} />

Theme.decorators = [
  (Story) => (
    <ThemeProvider theme={CleverlyTheme}>
      <Story />
    </ThemeProvider>
  )
]
