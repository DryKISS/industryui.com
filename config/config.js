/**
 * Config
 */

// UI
import { Sidebar as SidebarUI } from '../components'

export const apiConfig = {}
export const jwtConfig = {}

export const Brand = {
  logo: 'drykiss.svg',
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
  proRegular: ['faBars'],
  brands: ['faGithub']
}

const sidebarData = [
  {
    icon: ['fad', 'tachometer-alt-average'],
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

export const Sidebar = () => <SidebarUI brand='/drykiss.svg' data={sidebarData} />

export const Config = {
  apiConfig,
  Brand,
  Canonical,
  Google,
  Icons,
  jwtConfig,
  Sidebar
}
