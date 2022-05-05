/**
 * Components - Molecules - Mock Data Tree
 */

export default [
  {
    title: 'Home',
    key: 'home',
    href: 'http://www.google.com',
    child: [
      {
        title: 'Who are',
        key: 'who-are',
        count: 20
      },
      {
        title: "Who's?",
        key: 'who-s',
        count: 5
      }
    ]
  },
  {
    title: 'Services',
    key: 'services',
    child: [
      {
        title: 'Who are',
        key: 'who-s',
        count: 5
      },
      {
        title: "Who's?",
        key: 'who-ss',
        count: 3
      }
    ]
  },
  {
    title: 'About',
    key: 'about',
    child: [
      {
        title: 'Company',
        key: 'company'
      }
    ]
  }
]
