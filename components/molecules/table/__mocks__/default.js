/**
 * Mocks
 */

// Next
import Router from 'next/router'

// UI
import { Image, TableActions, TableLink } from '../../../'

export const columns = [
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
    hidden: true
  },
  {
    hidden: true
  },
  {
    text: 'Actions'
  }
]

export const rows = {
  data: [
    {
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      itemCount: 5,
      actions: ''
    },
    {
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      itemCount: 3,
      actions: ''
    }
  ]
}

const renderImage = ({ row }) => <Image alt='Logo' style={{ width: '50%' }} src={row.logo} />

export const columnsFormatter = [
  {
    text: 'ID'
  },
  {
    text: 'Company'
  },
  {
    formatter: TableLink,
    formatterData: {
      cell: 'company',
      to: 'url'
    },
    text: 'URL'
  },
  {
    formatter: renderImage,
    text: 'Logo'
  },
  {
    hidden: true
  },
  {
    text: 'Actions'
  }
]

export const columnsActions = [
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
    hidden: true
  },
  {
    hidden: true
  },
  {
    formatter: TableActions,
    formatterData: [
      {
        content: 'Edit',
        context: 'primary',
        icon: ['fad', 'edit'],
        to: '/manage',
        tooltip: 'Edit',
        numberOverlay: 'itemCount'
      },
      {
        content: 'Delete',
        context: 'danger',
        icon: ['fad', 'trash'],
        to: '/delete',
        tooltip: 'Delete'
      }
    ],
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

export const rowClick = row => {
  Router.push('/shortcodes/[addressId]', '/shortcodes/1')
}
