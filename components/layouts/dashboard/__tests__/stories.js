/**
 * Dashboard
 */

// UI
import { Dashboard } from 'components'
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

const Test = () => {
  return <>HERE</>
}

export const main = () => (
  <Dashboard
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
