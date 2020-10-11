/**
 * Navbar - Contained
 */

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

// Data
import { Default } from '../__mocks__/navbar'

export default {
  title: 'Molecules/Navbar',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  ...options
}

export const contained = () => <BaseComponent contained widgets={Default} />
