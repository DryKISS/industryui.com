/**
 * Figure
 */

// UI
import { Figure } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Figure',
  component: Figure,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Figure />
