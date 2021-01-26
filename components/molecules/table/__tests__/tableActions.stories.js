/**
 * Components - Molecules - Table Actions - Story
 */

// UI
import { TableActions } from 'components'
import Readme from '../README.md'

export default {
  component: TableActions,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Table/Actions'
}

const data = [
  {
    context: 'primary',
    disabled: true,
    icon: ['fas', 'trash'],
    numberOverlay: 'itemCount',
    to: '/delete',
    tooltip: 'Delete'
  },
  {
    context: 'secondary',
    icon: ['fas', 'edit'],
    overlayCustom: '√',
    to: '/manage',
    tooltip: 'Edit'
  },
  {
    context: 'info',
    icon: ['fas', 'trash'],
    to: '/delete',
    tooltip: 'Delete'
  },
  {
    context: 'success',
    icon: ['fas', 'edit'],
    numberOverlay: 'itemCount',
    to: '/manage',
    tooltip: 'Edit'
  },
  {
    context: 'danger',
    overlayCustom: '3',
    icon: ['fas', 'trash'],
    to: '/delete',
    tooltip: 'Delete'
  },
  {
    context: 'warning',
    disabled: true,
    icon: ['fas', 'trash'],
    to: '/delete',
    tooltip: 'Delete'
  }
]

const row = {
  id: '10001',
  company: 'DryKISS Ltd',
  url: 'https://drykiss.com',
  logo: 'https://drykiss.com/static/logo/drykiss.svg',
  itemCount: 5,
  actions: ''
}

export const tableAction = args => <TableActions {...args} data={data} row={row} />
