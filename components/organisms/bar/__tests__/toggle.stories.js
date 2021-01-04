/**
 * Components - Organisms - Bar - Tests - Toggle
 */

// UI
import { BarToggle } from '../components/toggle'
import Readme from '../README.md'

export default {
  component: BarToggle,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Bar/Toggle'
}

export const toggle = args => {
  return <BarToggle {...args} />
}
