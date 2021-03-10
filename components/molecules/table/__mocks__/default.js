/**
 * Components - Molecules - Table - Mock
 */

// React
import React from 'react'

// UI
import { Image, TableActions, TableLink, Text } from '../../../'

export const columns = [
  {
    text: 'ID',
  },
  {
    text: 'Company',
  },
  {
    text: 'URL',
  },
  {
    hidden: true,
  },
  {
    hidden: true,
  },
  {
    text: 'Actions',
  },
]

export const rows = {
  data: [
    {
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      itemCount: 5,
      actions: '',
    },
    {
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      itemCount: 3,
      actions: '',
    },
  ],
}

export const noCols = [
  {
    key: 'Name',
    value: 'Micheal Jordan',
  },
  {
    key: 'Name',
    value: 'Fred Joans',
  },
  {
    key: 'Name',
    value: 'Peter Good',
  },
]

const renderImage = ({ row }) => <Image alt="Logo" style={{ width: '50%' }} src={row.logo} />

export const columnsActions = [
  {
    text: 'ID',
  },
  {
    bottomCell: (
      <Text bold context="danger">
        bottom Cell
      </Text>
    ),
    sortable: true,
    sortName: 'company',
    text: 'Company',
  },
  {
    formatter: TableLink('/', 'url', 'company'),
    text: 'URL',
  },
  {
    formatter: renderImage,
    text: 'Logo',
  },
  {
    hidden: true,
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
        onClick: () => console.log('edit', row),
      },
      {
        content: 'Delete',
        context: 'danger',
        icon: ['fas', 'trash'],
        to: '/delete',
        tooltip: 'Delete',
      },
    ],
    text: 'Actions',
  },
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
      actions: '',
    },
    {
      context: 'secondary',
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      itemCount: 5,
      logo: '',
      actions: '',
    },
    {
      context: 'info',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: '',
    },
    {
      context: 'success',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: '',
    },
    {
      context: 'warning',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: '',
    },
    {
      context: 'danger',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      itemCount: 5,
      logo: '',
      actions: '',
    },
  ],
}
