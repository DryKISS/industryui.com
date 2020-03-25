/**
* Messaging/MessageContainer
*/

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Container } from 'components'
import Readme from '../../../../README.md'

export default {
  title: 'Molecules/Hero/HeroInfo/Container',
  component: Container,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (<Container className='container' />)
