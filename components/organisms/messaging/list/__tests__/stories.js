/**
 * Messaging/List
 */

// UI
import { MessageList } from 'components'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/list'

export default {
  title: 'Organisms/Messaging/List',
  component: MessageList,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => <MessageList messages={messages} />
