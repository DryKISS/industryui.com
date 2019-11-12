/**
 * Hero
 */

// React
import React from 'react'

// Hero
import { Hero } from '../'
import Readme from '../README.md'
import Jack from '../__resources__/hero-jack-russell.jpg'

const Buttons = [
  {
    content: 'Breeder Sign Up',
    context: 'primary',
    to: {
      href: {
        pathname: '/sign-up/template',
        query: { slug: 'breeder' }
      },
      as: '/sign-up/breeder'
    }
  },
  {
    content: 'Create Buyer Profile',
    context: 'secondary',
    to: {
      href: {
        pathname: '/sign-up/template',
        query: { slug: 'seeker' }
      },
      as: '/sign-up/seeker'
    }
  }
]

export default {
  title: 'Molecules/Hero',
  component: Hero,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Hero
    alt='Tailwise Jack Russell Dog'
    buttons={Buttons}
    image={Jack}
    message='Message'
    strapline={`
        Tailwise takes the hassle out of matching verified breeders with future
        dog owners, in their search to find the perfect pup. That means no
        puppy farms anywhere in the United Kingdom.
      `}
    title='The perfect puppy starts with a responsible breeder'
  />
)
