/**
 * Hero
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Hero } from '../'
import { TextBlock } from '../components/textBlock'
import { HeroImage } from '../components/image'
import { Title } from '../components/title'
import { Text } from '../components/text'
import Readme from '../README.md'
import Jack from '../__resources__/hero-jack-russell.jpg'
import Puppies from '../__resources__/hero-centered.jpg'

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
  decorators: [Wrapper],
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

export const centered = () => (
  <Hero
    alt='Tailwise Jack Russell Dog'
    buttons={Buttons}
    background={Puppies}
    backgroundSize='100%'
    message='Message'
    strapline={`
        Tailwise takes the hassle out of matching verified breeders with future
        dog owners, in their search to find the perfect pup. That means no
        puppy farms anywhere in the United Kingdom.
      `}
    title='The perfect puppy starts with a responsible breeder'
  />
)

export const CleverlyBlock = () => {
  return (
    <>
      <Hero background={Puppies} backgroundSize='100%' height='100vh'>
        <>
          <TextBlock
            content='Test'
            md={4}
            offset={{ md: 1 }}
            // strapline={`
            // Cleverly provides solutions for clients in a number of different sectors.whether you are looking for a single service line or a 'Compliance as a Service' solution, Cleverly can help.
            // `}
            top='394px'
          >
            <HeroImage alt='icon of text block' align='flex-start' image={Jack} width={50} />
            <Title children='CUSTOM SOLUTIONS' />
            <Text children="Cleverly provides solutions for clients in a number of different sectors.whether you are looking for a single service line or a 'Compliance as a Service' solution, Cleverly can help." />
          </TextBlock>
        </>
      </Hero>
    </>
  )
}
