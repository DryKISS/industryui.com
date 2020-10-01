/**
 * Copyright
 */

// UI
import { Copyright } from 'components'
import Readme from '../README.md'

// Data
import { Copyright as Data } from '../__mocks__/copyright'

export default {
  title: 'Molecules/Copyright',
  component: Copyright,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Copyright brand='Company Name' links={Data} />
