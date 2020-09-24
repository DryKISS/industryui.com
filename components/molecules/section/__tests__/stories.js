/**
 * Section
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Section } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Section',
  component: Section,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Section heading='Section Heading' />
