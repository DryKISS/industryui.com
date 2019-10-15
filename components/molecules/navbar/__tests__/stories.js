/**
 * Navbar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Navbar } from '../'
import Readme from '../README.md'

// Data
import { Buttons, Dashboard, Default, Left, UserItems } from '../__mocks__'

import { Brand } from 'config'

storiesOf('Molecules/Navbar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Navbar brand={Brand.logo} links={Default} />
  )

  .add('Buttons', () =>
    <Navbar brand={Brand.logo} links={Buttons} />
  )

  .add('Contained', () =>
    <Navbar brand={Brand.logo} container links={Default} />
  )

  .add('Left', () =>
    <Navbar brand={Brand.logo} links={Left} />
  )

  .add('No Brand', () =>
    <Navbar links={Default} />
  )

  .add('No Brand Left', () =>
    <Navbar links={Left} />
  )

  .add('Dashboard', () =>
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
