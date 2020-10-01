/**
 * Navbar - Brand
 */

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

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

export const brand = () => <BaseComponent />
