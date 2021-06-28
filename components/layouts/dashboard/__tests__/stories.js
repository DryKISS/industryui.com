/**
 * Layouts - Dashboard - Story
 */

// React
import React from 'react'

// UI
import Dashboard from '../dashboard'
import Text from '../../../atoms/text/text'
import Readme from '../README.md'

const meta = {
  canonical: 'dashboard',
  description: 'Dashboard',
  title: 'Dashboard'
}

export default {
  component: Dashboard,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Layouts/Dashboard'
}

const Test = () => {
  return <Text>HERE</Text>
}

export const main = (args) => (
  <Dashboard
    {...args}
    meta={meta}
    pageHeading={{
      heading: 'Default'
    }}
    resultAlert={{ message: 'Success' }}
    View={<Test />}
  >
    Dashboard Layout
  </Dashboard>
)
