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
        context: 'menuColor1'
      }
    },
    {
      id: 'navDogBreeds',
      name: 'Dog Breeds',
      to: '/dogs/breeds',
      type: {
        as: 'link',
        context: 'menuColor1'
      }
    },
    {
      id: 'navForBreeders',
      name: 'For Breeders',
      to: '/dogs/breeders',
      type: {
        as: 'link',
        context: 'menuColor1'
      }
    }
  ],

  right: [
    {
      id: 'navLitters',
      name: 'Find a Puppy',
      to: '/dogs/litters',
      type: {
        as: 'button',
        context: 'menuText2'
      }
    },
    {
      id: 'navBreederSignUp',
      name: 'Breeder Sign Up',
      to: '/sign-up/breeder',
      type: {
        as: 'button',
        context: 'menuColor2'
      }
    },
    {
      id: 'navLogIn',
      name: 'Log in',
      to: '/sign-in',
      type: {
        as: 'link',
        context: 'menuColor1'
      }
    }
  ]

}
