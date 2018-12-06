/**
 * Navigation
 */
export const NAVIGATION = {

  left: [
    {
      id: 'navHowWorks',
      name: 'How It Works',
      to: '/how-it-works'
    },

    {
      id: 'navDogBreeds',
      name: 'Dog Breeds',
      to: '/dogs/breeds'
    }
  ],

  right: [
    {
      id: 'navLogIn',
      name: 'Log in',
      to: '/sign-in'
    },

    {
      id: 'navLitters',
      name: 'Find a Puppy',
      to: '/dogs/litters',
      type: {
        as: 'button',
        context: 'danger',
        outline: true,
        size: 'lg'
      }
    },

    {
      id: 'navBreederSignUp',
      name: 'Breeder Sign Up',
      to: '/sign-up/breeder',
      type: {
        as: 'button',
        context: 'danger',
        size: 'lg'
      }
    }
  ]

}
