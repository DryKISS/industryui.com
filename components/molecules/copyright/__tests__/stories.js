/**
 * Copyright
 */

// UI
import { Copyright } from 'components'
import Readme from '../README.md'

// Data
import { Copyright as Data } from '../__mocks__/copyright'

export default {
  component: Copyright,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Copyright'
}

export const main = () => <Copyright brand='Company Name' links={Data} />
