/**
 * Navigation
 */
export const NAVIGATION = {

  left: [
    {
      id: 'navHowWorks',
      name: 'How It Works',
      to: '/how-it-works',
      type: {
        as: 'link',
        context: 'default'
      }
    },

    {
      id: 'navDogBreeds',
      name: 'Dog Breeds',
      to: '/dogs/breeds',
      type: {
        as: 'link',
        context: 'default'
      }
    }
  ],

  right: [
    {
      id: 'navLogIn',
      name: 'Log in',
      to: '/sign-in',
      type: {
        as: 'link',
        context: 'default'
      }
    },

    {
      id: 'navLitters',
      name: 'Find a Puppy',
      to: '/dogs/litters',
      type: {
        as: 'link',
        context: 'danger'
      }
    },

    {
      id: 'navBreederSignUp',
      name: 'Breeder Sign Up',
      to: '/sign-up/breeder',
      type: {
        as: 'link',
        context: 'danger'
      }
    }
  ]

}
