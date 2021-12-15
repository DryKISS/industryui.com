/**
 * Messaging/Send
 */

// React
import React from 'react'

// UI
import MessagingSend from '../messagingSend'
import Readme from '../README.md'
import { mentions } from '../../../container/__mocks__/mentions'
// import Preview from '../../../../../molecules/preview/preview'
import FullPreview from '../../fullPreview/fullPreview'

import MessageNames from '../../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../../organisms/messaging/communication/messagingActions'
import MessagingCommunicationService from '../../../../../services/componentCommunication/messaging/service'

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

export const NewMain = () => {
  const images = [
    {
      src: 'https://static.spin.com/files/2020/06/GettyImages-836649120-1592866985.jpg',
      type: 'image'
    },
    {
      src: 'https://i.ytimg.com/vi/xjmzca8uqlE/maxresdefault.jpg',
      type: 'image'
    },
    {
      src: 'https://static.spin.com/files/2020/06/GettyImages-836649120-1592866985.jpg',
      type: 'image'
    },
    {
      src: 'https://d1hk88326p7ilp.cloudfront.net/documents/8fc686b3-df98-45e7-a69e-6e5892e0e476.pdf',
      type: 'pdf'
    },
    {
      src: 'https://static.spin.com/files/2020/06/GettyImages-836649120-1592866985.jpg',
      type: 'image'
    },
    {
      src: 'https://i.ytimg.com/vi/xjmzca8uqlE/maxresdefault.jpg',
      type: 'image'
    },
    {
      src: 'https://static.spin.com/files/2020/06/GettyImages-836649120-1592866985.jpg',
      type: 'image'
    },
    {
      src: 'https://static.spin.com/files/2020/06/GettyImages-836649120-1592866985.jpg',
      type: 'image'
    },
    {
      src: 'https://i.ytimg.com/vi/xjmzca8uqlE/maxresdefault.jpg',
      type: 'image'
    },
    {
      src: 'https://static.spin.com/files/2020/06/GettyImages-836649120-1592866985.jpg',
      type: 'image'
    }
  ]

  const pdf = [
    {
      src: 'https://d1hk88326p7ilp.cloudfront.net/documents/8fc686b3-df98-45e7-a69e-6e5892e0e476.pdf',
      type: 'pdf'
    },
    {
      src: 'https://d1hk88326p7ilp.cloudfront.net/documents/8fc686b3-df98-45e7-a69e-6e5892e0e476.pdf',
      type: 'pdf'
    }
  ]

  const handleClick = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: pdf,
          selectedIndex: 0,
          isAdding: false,
          isPreview: true,
          isClearData: false
        }
      }
    })
  }

  const handleHideClick = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: [],
          selectedIndex: 0,
          isAdding: true,
          isPreview: false,
          isClearData: false
        }
      }
    })
  }

  const handleClearClick = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: null,
          isAdding: false,
          isPreview: false,
          isClearData: true,
          selectedIndex: 0
        }
      }
    })
  }

  return (
    <div style={{ height: 2200 }}>
      <FullPreview />
      <button
        type="button"
        onClick={handleClick}
        style={{
          minHeight: '10rem',
          height: '800px',
          width: '300px',
          borderRadius: '6px',
          objectFit: 'cover'
        }}
      >
        Click me
      </button>
      <br />
      <button type="button" onClick={handleHideClick}>
        Hide me
      </button>
      <br />
      <button type="button" onClick={handleClearClick}>
        Clear Data
      </button>
    </div>
  )
}
