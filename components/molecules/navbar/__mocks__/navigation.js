/**
 * Navbar - Mocks - Navigation
 */
export const Default = {
  right: [
    {
      id: 'navDropdown',
      name: 'User',
      type: {
        as: 'dropdown',
        items: [
          {
            id: 'settings',
            name: 'Settings',
            to: '/settings'
          },
          {
            id: 'profile',
            name: 'Profile',
            to: '/profile'
          },
          {
            id: 'logout-divider',
            divider: true
          },
          {
            id: 'logout',
            name: 'Logout',
            to: '/logout'
          }
        ]
      }
    },
    {
      id: 'navHome',
      name: 'Home',
      to: '/'
    },
    {
      id: 'navNav1',
      name: 'Contact',
      to: '/contact'
    },
    {
      id: 'navButtonSmall',
      name: 'Button Small',
      to: '/',
      type: {
        as: 'button',
        context: 'secondary',
        size: 'sm'
      }
    },
    {
      id: 'navNotification',
      to: '/notifications',
      type: {
        as: 'notification',
        count: 9
      }
    }
  ]
}

export const Left = {
  left: [
    {
      id: 'navHome',
      name: 'Home',
      to: '/'
    },
    {
      id: 'navNav1',
      name: 'Nav1',
      to: '/nav1'
    }
  ]
}

export const Buttons = {
  left: [
    {
      id: 'navHome',
      name: 'Home',
      to: '/'
    },
    {
      id: 'navNav1',
      name: 'Nav1',
      to: '/nav1'
    }
  ],
  right: [
    {
      id: 'navLogIn',
      name: 'Log in',
      to: '/sign-in'
    },
    {
      id: 'navButtonLarge',
      name: 'Button Large',
      to: '/',
      type: {
        as: 'button',
        size: 'lg'
      }
    },
    {
      id: 'navButtonSmall',
      name: 'Button Small',
      to: '/',
      type: {
        as: 'button',
        context: 'secondary',
        size: 'sm'
      }
    }
  ]
}
