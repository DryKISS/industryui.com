/**
 * Stepper
 */

// UI
import { Stepper } from '../../../'
import Readme from '../README.md'

// Data
import { Data } from '../__mocks__/stepper'

export default {
  args: {
    items: Data.items,
    summary: Data.summary
  },
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Stepper'
}

export const main = args => <Stepper {...args} />
