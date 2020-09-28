/**
 * Error404
 */

// UI
import { Error404 } from 'components'
import Readme from '../README.md'

export default {
  title: 'Pages/Error404',
  component: Error404,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Error404 />
