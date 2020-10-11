/**
 * Navbar - Widgets
 */

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

export default {
  title: 'Molecules/Navbar/Widgets',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  ...options
}

export const widgets = () => <BaseComponent />
