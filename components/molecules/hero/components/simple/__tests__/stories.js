/**
 * Hero
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { SimpleHero } from '../components/simple'
import Readme from '../../../README.md'
import Mary from '../../../__resources__/hero-mary-bulldog.png'

export default {
  title: 'Molecules/Hero/Simple',
  component: SimpleHero,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const simple = () => (
  <SimpleHero
    alt='French bulldog Mary'
    image={Mary}
    title='Your bulldog Mary'
    strapline={`
        Mary is a French bulldog, everybody loves Mary.
      `}
  />
)
