/**
 * Components - Atoms - Address - Story
 */

// Storybook
import { CountryControl } from '../../../../.storybook/decorators'

// UI
import { Address } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    county: 'Sussex',
    country: 'United Kingdom',
    line1: '24 Accacia Road',
    line2: 'Grandhouse',
    line3: 'Bermondsey',
    postcode: 'W1 2N',
    town: 'London'
  },
  argTypes: {
    country: CountryControl
  },
  component: Address,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Address'
}

export const main = args => <Address {...args} />
