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
        color: 'menuColor1',
        backgroundColor: 'white'
      }
    },
    {
      id: 'navDogBreeds',
      name: 'Dog Breeds',
      to: '/dogs/breeds',
      type: {
        as: 'link',
        color: 'menuColor1',
        backgroundColor: 'white'
      }
    },
    {
      id: 'navForBreeders',
      name: 'For Breeders',
      to: '/dogs/breeders',
      type: {
        as: 'link',
        color: 'menuColor1',
        backgroundColor: 'white'
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
        color: 'white',
        backgroundColor: 'menuColor3'
      }
    },
    {
      id: 'navBreederSignUp',
      name: 'Breeder Sign Up',
      to: '/sign-up/breeder',
      type: {
        as: 'button',
        color: 'white',
        backgroundColor: 'menuColor2'
      }
    },
    {
      id: 'navLogIn',
      name: 'Log in',
      to: '/sign-in',
      type: {
        as: 'link',
        color: 'menuColor1',
        backgroundColor: 'white'
      }
    }
  ]

}
