/**
 * Footer
 */
export const FOOTER = column => [
  {
    size: { md: 8, lg: 6 },
    offset: { md: 4, lg: 0 },
    formatter: column
  },
  {
    size: { md: 4, lg: 2 },
    header: 'About',
    links: {
      inline: false,
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
    size: { md: 4, lg: 2 },
    header: 'Discover',
    links: {
      inline: false,
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
    size: { md: 4, lg: 2 },
    header: 'Contact',
    links: {
      inline: false,
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
