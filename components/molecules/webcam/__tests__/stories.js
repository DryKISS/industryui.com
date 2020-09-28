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
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Webcam />
