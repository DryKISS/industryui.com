/**
 * Breadcrumb
 */

// UI
import { Breadcrumb } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Breadcrumb category='DryKISS' page='Home' path='/' />
