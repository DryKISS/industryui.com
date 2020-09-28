/**
 * Date
 */

// UI
import { Date } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Date',
  component: Date,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Date date='24 Feb 2020 08:36' />
