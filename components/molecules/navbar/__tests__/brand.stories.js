/**
 * Navbar - Brand
 */

// UI
import { BaseComponent, options } from './baseComponent'
import Readme from '../README.md'

export default {
  title: 'Molecules/NavbarBrand',
  parameters: {
    readme: {
      sidebar: Readme
    }
  },
  ...options
}

export const brand = () => <BaseComponent />
