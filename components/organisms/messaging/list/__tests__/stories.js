/**
 * Messaging/List
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { MessageList } from 'components'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/list'

export default {
  title: 'Organisms/Messaging/List',
  component: MessageList,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <MessageList messages={messages} />
