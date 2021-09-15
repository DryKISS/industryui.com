/**
 * Navbar - Mocks - Navigation
 */
const DEFAULT = {
  right: [
    {
      id: 'navIcon',
      to: '/',
      type: {
        as: 'icon',
        icon: 'bell'
      }
    },
    {
      id: 'navDropdown',
      name: 'User',
      type: {
        as: 'dropdown',
        items: [
          {
            id: 'settings',
            name: 'Settings',
            to: '/'
          },
          {
            id: 'profile',
            name: 'Profile',
            to: '/'
          },
          {
            id: 'logout-divider',
            divider: true
          },
          {
            id: 'logout',
            name: 'Logout',
            to: '/'
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
      to: '/'
    },
    {
      id: 'navIcon1',
      to: '/',
      type: {
        as: 'icon',
        icon: 'bell'
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
    },
    {
      id: 'navNotification',
      to: '/',
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
      to: '/'
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
      to: '/'
    }
  ],
  right: [
    {
      id: 'navLogIn',
      name: 'Log in',
      to: '/'
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

export default DEFAULT
