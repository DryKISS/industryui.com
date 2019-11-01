/**
 * Sidebar
 */

// React
import React from 'react'

// UI
import { Navbar, SidebarLayout } from '../../../'
import Readme from '../README.md'

// Config
import { Brand } from 'config'

export default {
  title: 'Layouts/Sidebar',
  component: SidebarLayout,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const Copyright = [
  {
    name: 'Terms and conditions',
    to: '/policies/terms-conditions'
  },

  {
    name: 'Privacy policy',
    to: '/policies/privacy-policy'
  },

  {
    name: 'Site map',
    to: '/policies/site-map'
  }
]

const Footer = [
  {
    size: { sm: 6, md: 3 },
    header: 'About',
    text: '<p>About</p>'
  },
  {
    size: { sm: 6, md: 3 },
    header: 'Site Links',
    text: '<p>Links</p>'
  },
  {
    size: { sm: 6, md: 3 },
    header: 'Who we Help',
    text: '<p>Help</p>'
  },
  {
    size: { sm: 6, md: 3 },
    header: 'Contact',
    text: '<p>Contact</p>'
  }
]

const Navigation = () => {
  const Default = {
    right: [
      {
        id: 'navHome',
        name: 'Home',
        to: '/'
      }
    ]
  }

  return <Navbar links={Default} />
}

export const main = () => (
  <SidebarLayout brand='DryKISS' copyright={Copyright} footer={Footer} Navigation={Navigation}>
    <>HERE</>
  </SidebarLayout>
)
