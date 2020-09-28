/**
 * Sidebar
 */

// UI
import { Sidebar } from 'components'
import Readme from '../README.md'

// Data
import { Sidebar as Data } from '../__mocks__/links'

export default {
  title: 'Molecules/Sidebar',
  component: Sidebar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Sidebar data={Data} />
