/**
 * Big Calendar
 */

// UI
import { BigCalendar } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Big Calendar',
  components: BigCalendar,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BigCalendar />
