/**
 * M0cks - Figma
 */

// UI
import { Address } from '../../../'

const address = index => (
  <Address county='county' country='UK' line1='Wimbledon' key={index} postcode='SW19' />
)

export const Figma = [
  {
    size: { sm: 6, md: 3, lg: 3 },
    header: 'About',
    links: {
      items: [
        {
          id: 'footerWhatWeDo',
          name: 'What we do',
          to: '/what-we-do'
        },
        {
          id: 'footerMission',
          name: 'Our mission',
          to: '/mission'
        },
        {
          id: 'footerFeatures',
          name: 'Features',
          to: '/features'
        },
        {
          id: 'footerHelp',
          name: 'Help',
          to: '/help'
        },
        {
          id: 'footerDownloads',
          name: 'Downloads',
          to: '/downloads'
        }
      ]
    }
  },
  {
    size: { sm: 6, md: 3, lg: 3 },
    header: 'External',
    links: {
      items: [
        {
          id: 'footerDryKISS',
          name: 'DRYKISS',
          to: 'https://drykiss.com'
        },
        {
          id: 'footerGoogle',
          name: 'Google',
          to: 'https://google.com'
        }
      ]
    }
  },
  {
    size: { sm: 6, md: 3, lg: 3 },
    header: 'Contact',
    formatter: address,
    links: {
      items: [
        {
          id: 'footerContact',
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  },
  {
    size: { sm: 6, md: 3, lg: 3 },
    header: 'Statistics',
    text: '24000 jobs completed',
    links: {
      items: [
        {
          id: 'footerStatistics',
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
]
