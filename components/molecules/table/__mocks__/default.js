/**
 * Components - Molecules - Table - Mock
 */

// React
import React from 'react'

// UI
import { Image, TableActions, TableLink, Text } from '../../../'

export const rows = {
  data: [
    {
      id: '10001',
      testHidden1: 'hidden',
      testHidden2: 'hidden',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      itemCount: 5,
      actions: ''
    },
    {
      id: '10002',
      testHidden1: 'hidden',
      testHidden2: 'hidden',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      itemCount: 3,
      actions: ''
    }
  ]
}

export const noCols = [
  {
    key: 'Name',
    value: 'Micheal Jordan'
  },
  {
    key: 'Name',
    value: 'Fred Joans'
  },
  {
    key: 'Name',
    value: 'Peter Good'
  }
]

const renderImage = ({ row }) => <Image alt="Logo" style={{ width: '50%' }} src={row.logo} />

export const columnsActions = [
  {
    text: 'ID'
  },
  {
    hidden: true
  },
  {
    hidden: true
  },
  {
    bottomCell: (
      <Text bold context="danger">
        bottom Cell
      </Text>
    ),
    sortable: true,
    sortName: 'company',
    text: 'Company'
  },
  {
    formatter: TableLink('/', 'url', 'company'),
    text: 'URL'
  },
  {
    bottomCell: (
      <Text bold context="danger">
        bottom Cell
      </Text>
    ),
    formatter: renderImage,
    text: 'Logo'
  },
  {
    hidden: true
  },
  {
    formatter: TableActions,
    formatterData: (row) => [
      {
        content: 'Edit',
        context: 'primary',
        icon: ['fas', 'edit'],
        to: '/manage',
        tooltip: 'Edit',
        numberOverlay: 'itemCount',
        onClick: () => console.info('edit', row)
      },
      {
        content: 'Delete',
        context: 'danger',
        icon: ['fas', 'trash'],
        to: '/delete',
        tooltip: 'Delete'
      }
    ],
    text: 'Actions'
  }
]

export const columns = [
  {
    text: 'Context'
  },
  {
    text: 'ID'
  },
  {
    text: 'Company'
  },
  {
    text: 'URL'
  },
  {
    text: 'Item Count'
  },
  {
    text: 'Logo'
  },
  {
    text: 'Actions'
  }
]

export const rowsContext = {
  data: [
    {
      context: 'primary',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: ''
    },
    {
      context: 'secondary',
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      itemCount: 5,
      logo: '',
      actions: ''
    },
    {
      context: 'info',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: ''
    },
    {
      context: 'success',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: ''
    },
    {
      context: 'warning',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: ''
    },
    {
      context: 'danger',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: ''
    }
  ]
}
