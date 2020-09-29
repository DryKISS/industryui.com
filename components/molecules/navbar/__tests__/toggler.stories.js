/**
 * Navbar - Toggler
 */

// UI
import { Toggler } from 'components'
import { BaseComponent } from './baseComponent'
import Readme from '../README.md'

export default {
  component: Toggler,
  title: 'Molecules/Navbar',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const toggler = () => <BaseComponent visible />
