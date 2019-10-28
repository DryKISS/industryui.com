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
  }
]

const renderImage = ({ row }) => (
  <Image alt='Logo' style={{ width: '50%' }} src={row.logo} />
)

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
    formatter: TableActions,
    formatterData: [{
      content: 'Edit',
      context: 'primary',
      icon: ['fad', 'edit'],
      icon: 'edit',
      to: '/manage',
      tooltip: 'Edit'
    }, {
      content: 'Delete',
      context: 'danger',
      icon: 'trash',
      to: '/delete',
      tooltip: 'Delete'
    }],
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
      actions: ''
    },
    {
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com',
      logo: 'https://drykiss.com/static/logo/drykiss.svg',
      actions: ''
    }
  ]
}

export const rowsContext = {
  data: [
    {
      context: 'primary',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com'
    },
    {
      context: 'secondary',
      id: '10002',
      company: 'Triangle Solutions Ltd',
      url: 'https://triangle-solutions.com'
    },
    {
      context: 'info',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com'
    }, {
      context: 'success',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com'
    }, {
      context: 'warning',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com'
    }, {
      context: 'danger',
      id: '10001',
      company: 'DryKISS Ltd',
      url: 'https://drykiss.com'
    }
  ]
}

export const rowClick = (row) => {
  Router.push(
    '/shortcodes/[addressId]',
    '/shortcodes/1'
  )
}
