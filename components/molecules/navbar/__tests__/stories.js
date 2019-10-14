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
import { Navigation } from '../__mocks__/navigation'
import { Dashboard } from '../__mocks__/dashboard'
import { UserItems } from '../__mocks__/userItems'
import SVG from '../__resources__/drykiss.svg'

storiesOf('Molecules/Navbar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Navbar
      brand={SVG}
      links={Navigation}
    />
  )

  .add('Dashboard', () =>
    <Navbar
      brand={SVG}
      links={Dashboard}
      notifications={{
        link: {
          to: '/dashboard/messages'
        },
        count: 9
      }}
      user={{
        name: 'Tenant',
        items: UserItems
      }}
    />
  )
