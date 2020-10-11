/**
 * Dog - Link
 */

// Component
import { DogLink } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Dog/Link',
  component: DogLink,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <DogLink name='DogName' />
