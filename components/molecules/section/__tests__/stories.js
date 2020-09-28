/**
 * Section
 */

// UI
import { Section } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Section',
  component: Section,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Section heading='Section Heading' />
