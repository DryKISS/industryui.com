/**
 * Messaging/List
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import { MessageList } from '../index'
import Readme from '../README.md'

// Data
import { messages } from '../__mocks__/list'

export default {
  component: MessageList,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Organisms/Messaging/List',
}

export const main = () => (
  <ListWrapper>
    <MessageList initialMessages={messages} />
  </ListWrapper>
)

const ListWrapper = styled.div`
  min-height: 30rem;
`
