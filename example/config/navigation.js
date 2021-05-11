/**
 * Navigation
 */

// UI
import { Navbar } from '@drykiss/industry-ui'
import { Brand } from '../config/config'

export const Navigation = () => {
  const Default = {
    right: [
      {
        id: 'navHome',
        name: 'Home',
        to: '/'
      },
      {
        id: 'navWhatWeDo',
        name: 'What We Do',
        to: '/what-we-do'
      },
      {
        id: 'navOurWork',
        name: 'Our Work',
        to: '/our-work'
      },
      {
        id: 'navCareer',
        name: 'Careers',
        to: '/careers'
      },
      {
        id: 'navTeam',
        name: 'Team',
        to: '/team'
      },
      {
        id: 'navAbout',
        name: 'About',
        to: '/about'
      },
      {
        id: 'navContact',
        name: 'Contact',
        to: '/contact'
      }
    ]
  }

  return (
    <Navbar
      animational
      brand={Brand.logo}
      custom
      style={{ alignItems: 'center' }}
      widgets={Default}
    />
  )
}
