/**
 * Navigation
 */
export const Default = {
  right: [
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
