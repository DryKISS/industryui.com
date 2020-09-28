/**
 * Dog - Name
 */

// Component
import { DogName } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Dog/Name',
  component: DogName,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <DogName row={{ gender: 'male', name: 'DogName' }} />
