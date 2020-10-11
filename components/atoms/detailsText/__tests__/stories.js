/**
 * Components - Details - Stories
 */

// UI
import { DetailsText } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/DetailsText',
  component: DetailsText,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <DetailsText content='Caption' text='value for this property' />
