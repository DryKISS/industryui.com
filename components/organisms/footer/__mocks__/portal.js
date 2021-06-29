/**
 * Components - Organisms - Footer - Mocks - Portal
 */
const PORTAL = [
  {
    size: { sm: 12, md: 6 },
    text: {
      align: 'center',
      items: [
        {
          content: 'Address can go here, to represent the company, office'
        }
      ]
    }
  },
  {
    size: { sm: 12, md: 6 },
    links: {
      align: 'center',
      direction: 'row',
      items: [
        {
          id: 'footerTerms',
          name: 'T&Cs',
          to: '/'
        },
        {
          id: 'footerPrivacy',
          name: 'Privacy',
          to: '/'
        },
        {
          id: 'footerContact',
          name: 'Contact us',
          to: '/'
        },
        {
          id: 'footerLearning',
          icon: 'graduation-cap',
          name: 'Learning centre',
          to: '/'
        }
      ]
    }
  }
]
export default PORTAL
