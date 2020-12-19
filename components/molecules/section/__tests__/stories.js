/**
 * Section
 */

// UI
import { Section } from 'components'
import Readme from '../README.md'

export default {
  args: {
    heading: 'Section Heading'
  },
  component: Section,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Section'
}

export const main = args => <Section {...args} />
