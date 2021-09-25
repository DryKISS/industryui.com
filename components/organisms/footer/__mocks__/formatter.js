/**
 * Components - Organisms - Footer - Mocks - Formatter
 */

// React
import React, { Fragment } from 'react'

// UI
import Image from '../../../atoms/image/image'
import List from '../../../atoms/list/list'
import ListItem from '../../../atoms/list/listItem'

const renderColumn = (index) => (
  <Fragment key={index}>
    <Image alt="DryKISS" src="https://via.placeholder.com/250x30" />

    <List unstyled>
      <ListItem>Strapline</ListItem>
      <ListItem>email@domain.com</ListItem>
      <ListItem>0201 1234 1234</ListItem>
    </List>
  </Fragment>
)

const FORMATTER = [
  {
    size: {
      md: 8,
      lg: 6
    },
    offset: {
      md: 4,
      lg: 0
    },
    formatter: renderColumn
  },
  {
    size: {
      md: 4,
      lg: 2
    },
    header: {
      content: 'About'
    },
    links: {
      items: [
        {
          id: 'footerHowItWorks',
          name: 'How it Works',
          to: '/how-it-works'
        },
        {
          id: 'footerBlog',
          name: 'Blog',
          to: '/pet-tails'
        }
      ]
    }
  },
  {
    size: {
      md: 4,
      lg: 2
    },
    header: {
      content: 'Discover'
    },
    links: {
      items: [
        {
          id: 'footerSignUp',
          name: 'Sign Up',
          to: '/sign-up'
        },
        {
          id: 'footerProducts',
          name: 'Products',
          to: '/products'
        }
      ]
    }
  },
  {
    size: {
      md: 4,
      lg: 2
    },
    header: {
      content: 'Contact'
    },
    links: {
      items: [
        {
          id: 'footerContact',
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
]
export default FORMATTER
