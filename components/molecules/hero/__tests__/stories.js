/**
 * Hero
 */

// React
import React from 'react'

// UI
import Heading from '../../../atoms/heading/heading'
import Hero from '../hero'
import Image from '../../../atoms/image/image'
import TextBlock from '../components/textBlock'
import Readme from '../README.md'

// Resources
import Jack from '../__resources__/hero-jack-russell.jpg'
import Puppies from '../__resources__/hero-centered.jpg'
import Custom from '../__resources__/hero-vector.png'

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
  component: Hero,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Hero'
}

export const main = (args) => (
  <Hero
    {...args}
    alt="Tailwise Jack Russell Dog"
    buttons={Buttons}
    image={Jack}
    message="Message"
    strapline={`
        Tailwise takes the hassle out of matching verified breeders with future
        dog owners, in their search to find the perfect pup. That means no
        puppy farms anywhere in the United Kingdom.
      `}
    title="The perfect puppy starts with a responsible breeder"
  />
)

export const centered = (args) => (
  <Hero
    {...args}
    alt="Tailwise Jack Russell Dog"
    buttons={Buttons}
    background={Puppies}
    backgroundSize="100%"
    message="Message"
    strapline={`
        Tailwise takes the hassle out of matching verified breeders with future
        dog owners, in their search to find the perfect pup. That means no
        puppy farms anywhere in the United Kingdom.
      `}
    title="The perfect puppy starts with a responsible breeder"
  />
)

export const CleverlyBlock = (args) => {
  return (
    <Hero {...args} background={Puppies} backgroundSize="100%" height="100vh">
      <TextBlock content="Test" md={4} offset={{ md: 1 }} top="394px">
        <Image alt="Icon" src={Custom} width="64px" />
        <Heading content="CUSTOM SOLUTIONS" noMargin tag="h2" />
        <p>
          Cleverly provides solutions for clients in a number of different sectors.whether you are
          looking for a single service line or a 'Compliance as a Service' solution, Cleverly can
          help.
        </p>
      </TextBlock>
    </Hero>
  )
}
