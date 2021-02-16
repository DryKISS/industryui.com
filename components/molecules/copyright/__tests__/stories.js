/**
 * Copyright
 */

// UI
import { Copyright } from '../../../'
import Readme from '../README.md'

// Data
import { Copyright as Data } from '../__mocks__/copyright'

export default {
  args: {
    links: Data
  },
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

export const main = args => <Copyright {...args} />
