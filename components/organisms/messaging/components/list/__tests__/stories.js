/**
 * Messaging/List
 */

// UI
import styled from 'styled-components'
import { MessageList } from 'components'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/list'

export default {
  component: MessageList,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/List'
}

export const main = () => (
  <ListWrapper>
    <MessageList messages={messages} />
  </ListWrapper>
)
const ListWrapper = styled.div`
  min-height: 30rem;
`
