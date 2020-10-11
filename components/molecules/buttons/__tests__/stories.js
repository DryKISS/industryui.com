/**
 * Buttons
 */

// UI
import { Buttons } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Buttons',
  component: Buttons,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Buttons next nextText='Submit' />
