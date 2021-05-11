/**
 * Footer
 */
export const Footer = [
  {
    header: {
      content: 'About',
      context: 'white'
    },
    size: { sm: 12, md: 4 },
    text: {
      items: [
        {
          content: 'DryKISS is a full-service internet and mobile digital production house.'
        },
        {
          content:
            'Our core services span consulting, strategy, planning, development, testing and analytics. Using cutting edge technologies within disciplined processes.'
        }
      ]
    }
  },
  {
    size: { sm: 12, md: 4 },
    header: {
      content: 'Social',
      context: 'white'
    },
    links: {
      context: 'white',
      items: [
        {
          id: 'footerFacebook',
          icon: 'facebook-square',
          iconPrefix: 'fab',
          name: 'Facebook',
          to: 'https://www.facebook.com/DryKISSLtd'
        },
        {
          id: 'footerTwitter',
          icon: 'twitter-square',
          iconPrefix: 'fab',
          name: 'Twitter',
          to: 'https://twitter.com/DryKISSLtd'
        },
        {
          id: 'footerLinkedIn',
          icon: 'linkedin',
          iconPrefix: 'fab',
          name: 'LinkedIn',
          to: 'https://www.linkedin.com/company/drykiss-ltd'
        }
      ]
    }
  },
  {
    size: { sm: 12, md: 4 },
    header: {
      content: 'Contact',
      context: 'white'
    },
    text: {
      items: [
        {
          content: `We’d love to hear about your project. Contact us below.
          <address>
            Wimbledon, London, UK
          </address>`
        }
      ]
    },
    links: {
      context: 'white',
      items: [
        {
          id: 'footerCall',
          icon: 'phone',
          name: '44 (0) 778 043 5329',
          to: 'tel:+447780435329'
        },
        {
          id: 'footerEmail',
          icon: 'envelope',
          name: 'info@drykiss.com',
          to: 'mailto:info@drykiss.com'
        }
      ]
    }
  }
]
