/**
 * Icon
 */

// UI
import { IconStacked } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Icon/Stacked',
  component: IconStacked,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <IconStacked icon='envelope' />
