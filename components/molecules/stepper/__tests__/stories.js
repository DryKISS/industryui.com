/**
 * Stepper
 */

// UI
import { Stepper } from 'components'
import Readme from '../README.md'

// Data
import { Data } from '../__mocks__/stepper'

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Stepper items={Data.items} summary={Data.summary} />
