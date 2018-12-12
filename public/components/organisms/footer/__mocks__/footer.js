/**
 * Footer
 */
export const FOOTER = (column) => ([

  {
    columns: { md: 12, lg: 6 },
    formatter: column,  // early rendering by "column()" not works with story. See also Footer._render
    /*style: {          // works ok but need to finish style tuning
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

    } */
  },

  {
    columns: { md: 4, lg: 2 },
    header: 'Tailwise',
    links: [
      {
        id: 'footerHowItWorks',
        name: 'How it Works',
        to: '/how-it-works'
      },
      {
        id: 'footerBlog',
        name: 'Blog',
        to: '/pet-tails'
      },
      {
        id: 'footerContact',
        name: 'Contact',
        to: '/contact'
      }
    ]
  },

  {
    columns: { md: 4, lg: 2 },
    header: 'Discover',
    links: [
      {
        id: 'footerBreederSignUp',
        name: 'Breeder Sign Up',
        to: '/sign-up/breeder'
      },
      {
        id: 'footerLitter',
        name: 'Puppies for sale',
        to: '/dogs/litters'
      },
      {
        id: 'footerDogBreeds',
        name: 'Dog breeds',
        to: '/dogs/breeds'
      }
    ]
  },

  {
    columns: { md: 4, lg: 2 },
    header: 'Top dog breeds',
    links: [
      {
        id: 'footerCockapoo',
        name: 'Cockapoo',
        to: '/dogs/breeds/cockapoo'
      },
      {
        id: 'footerLabrador',
        name: 'Labrador retriever',
        to: '/dogs/breeds/labrador-retriever'
      },
      {
        id: 'footerCocker',
        name: 'Cocker spaniel',
        to: '/dogs/breeds/cocker-spaniel'
      },
      {
        id: 'footerCollie',
        name: 'Border collie',
        to: '/dogs/breeds/border-collie'
      }
    ]
  }

])
