/**
 * Intercom
 */

// Hero
import { Intercom } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Intercom',
  component: Intercom,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Intercom appID='12345' />
