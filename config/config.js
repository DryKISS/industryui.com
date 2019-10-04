/**
 * Config
 */

// UI
import { Sidebar as SidebarUI } from '../components'

export const Brand = {
  logo: '/static/logo/cleverly.svg',
  name: 'IndustryUI'
}

export const Canonical = 'https://industryui.com'

export const GetAddress = {
  apiKey: ''
}

export const Google = {
  analytics: ''
}

export const Icons = {
  proRegular: [
    'faBell',
    'faCheckCircle'
  ],
  brands: [
    'faGithub',
    'faLinkedin'
  ]
}

const data = [
  {
    name: 'Dashboard',
    to: '/dashboard'
  },

  {
    name: 'Issues',
    to: '/dashboard/issues'
  },

  {
    name: 'Calendar',
    to: '/dashboard/calendar'
  },

  {
    divider: true
  },

  {
    name: 'Messages',
    to: '/dashboard/messages'
  }
]

export const Sidebar = () => <SidebarUI data={data} />

export const Config = {
  Brand,
  Canonical,
  Google,
  Icons,
  Sidebar
}
