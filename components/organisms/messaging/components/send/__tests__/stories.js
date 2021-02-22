/**
 * Messaging/Send
 */

// React
import React from 'react'

// UI
import { MessagingSend } from '../index'
import Readme from '../README.md'
import { mentions } from '../../../container/__mocks__/mentions'

export default {
  args: {
    audienceItems: [
      { name: 'All', id: 'all' },
      { name: 'Internal', id: 'internal' },
      { name: 'Customer Only', id: 'customer' },
      { name: 'Supplier Only', id: 'supplier' },
      { name: 'Customer & Supplier', id: 'customer-supplier' }
    ],
    maxLength: 320,
    onSubmit: () => {}
  },
  argTypes: {
    maxLength: {
      control: {
        type: 'number'
      }
    }
  },
  component: MessagingSend,
  mentions,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Messaging/Send'
}

export const main = (args) => {
  return <MessagingSend {...args} />
}
