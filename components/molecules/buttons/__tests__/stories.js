/**
 * Buttons
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Buttons } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Buttons',
  component: Buttons,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Buttons next nextText='Submit' />
