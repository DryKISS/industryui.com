/**
 * Messaging/Message
 */

// UI
import { Message } from 'components'
import Readme from '../README.md'

// Data
import { message } from '../__mocks__/message'

export default {
  title: 'Organisms/Messaging/Message',
  component: Message,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <Message message={message} prevType='out' time='12:00' type='in' />
