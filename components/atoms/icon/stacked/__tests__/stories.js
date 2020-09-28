/**
 * Icon
 */

// UI
import { IconStacked } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Icon/Stacked',
  component: IconStacked,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <IconStacked icon='envelope' />
