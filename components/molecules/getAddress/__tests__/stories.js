/**
 * Get Address
 */

// UI
import { GetAddress } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Get Address',
  component: GetAddress,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <GetAddress apiKey='' change={() => {}} form={{ postcode: 'SW19 2EZ' }} />
