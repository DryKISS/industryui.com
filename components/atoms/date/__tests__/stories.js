/**
 * Date
 */

// UI
import { Date } from 'components'
import Readme from '../README.md'

export default {
  args: {
    date: '24 Feb 2020 08:36'
  },
  component: Date,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Date'
}

export const main = args => <Date {...args} />
