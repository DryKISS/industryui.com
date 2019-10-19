/**
 * Navbar
 */

// React
import React from 'react'

// UI
import { Navbar } from '../'
import Readme from '../README.md'

// Style
import { ThemeProvider } from 'styled-components'

// Data
import { Buttons, Dashboard, Default, Left, UserItems } from '../__mocks__'

import { Brand } from 'config'

const NAVBAR = {
  background: '#000',
  colourActive: '#fff',
  colourHover: '#aaa',
  height: '6rem'
}

export default {
  title: 'Molecules/Navbar',
  component: Navbar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Navbar brand={Brand.logo} links={Default} />

defaultStory.story = {
  name: 'Default'
}

export const buttons = () => <Navbar brand={Brand.logo} links={Buttons} />

export const themed = () => (
  <ThemeProvider theme={{ NAVBAR }}>
    <Navbar brand={Brand.logo} container links={Default} />
  </ThemeProvider>
)

export const contained = () => <Navbar brand={Brand.logo} container links={Default} />

export const left = () => <Navbar brand={Brand.logo} links={Left} />

export const noBrand = () => <Navbar links={Default} />

export const noBrandLeft = () => <Navbar links={Left} />

export const dashboard = () => (
  <Navbar
    brand={Brand.logo}
    links={Dashboard}
    notifications={{
      link: {
        to: '/dashboard/messages'
      },
      count: 9
    }}
    user={{
      name: 'User',
      items: UserItems
    }}
  />
)
