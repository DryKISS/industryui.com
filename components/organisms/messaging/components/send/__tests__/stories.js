/**
 * Messaging/Send
 */

// React
import React from 'react'

// UI
import MessagingSend from '../messagingSend'
import Readme from '../README.md'
import { mentions } from '../../../container/__mocks__/mentions'
import Preview from '../../../../../molecules/preview/preview'
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
    }
  ]

  // const pdf = [
  //   {
  //     src: 'https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/documents/5786fad4-6c63-4e43-b127-c74c7819401c.xlsx',
  //     type: 'pdf'
  //   },
  //   {
  //     src: 'https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/documents/9a4a9954-5450-44d5-9412-9addc297c2ae.xlsx',
  //     type: 'pdf'
  //   }
  // ]

  const handleClick = () => {
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: [],
          selectedIndex: 0
        }
      }
    })
  }
  return (
    <>
      <FullPreview isAddFile />
      <button
        type="button"
        onClick={handleClick}
        style={{
          minHeight: '10rem',
          height: '30rem',
          borderRadius: '6px',
          objectFit: 'cover'
        }}
      >
        Click me
      </button>
    </>
  )
}
