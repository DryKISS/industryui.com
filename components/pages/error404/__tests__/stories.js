/**
 * Error404
 */

// UI
import { Error404 } from 'components'
import Readme from '../README.md'

export default {
  component: Error404,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Pages/Error404'
}

export const main = args => <Error404 {...args} />
