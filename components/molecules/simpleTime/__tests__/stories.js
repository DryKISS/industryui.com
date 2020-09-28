/**
 * SimpleTime
 */

// UI
import { SimpleTime } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/SimpleTime',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  return <SimpleTime />
}

export const main = () => <BaseComponent />
