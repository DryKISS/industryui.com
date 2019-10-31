/**
 * Dashboard
 */

// React
import React from 'react'

// UI
import { Dashboard } from '../'
import Readme from '../README.md'

const meta = {
  canonical: 'dashboard',
  description: 'Dashboard',
  title: 'Dashboard'
}

export default {
  title: 'Layouts/Dashboard',
  component: Dashboard,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Dashboard
    error={{ message: 'Error 404' }}
    isLoading={false}
    meta={meta}
    pageHeading={{
      heading: 'Default'
    }}
    success
  >
    Dashboard Layout
  </Dashboard>
)
