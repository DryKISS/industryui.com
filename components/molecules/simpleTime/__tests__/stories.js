/**
 * SimpleTime
 */

// UI
import { SimpleTime } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/SimpleTime',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = props => {
  return <SimpleTime />
}

export const main = () => <BaseComponent />
