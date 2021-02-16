/**
 * Messaging/Message
 */

// UI
import { Message } from '../../../'
import Readme from '../README.md'

// Data
import { message } from '../__mocks__/message'

export default {
  component: Message,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/Message'
}

export const main = () => (
  <Message config={{}} message={message} prevType='out' time='12:00' type='in' />
)
