/**
 * Webcam
 */

// UI
import { Webcam } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Webcam',
  component: Webcam,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Webcam />
