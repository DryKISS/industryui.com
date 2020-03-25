/**
 * Messaging/MessageContainer
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Title } from '../components'
import Readme from '../../../../../README.md'

export default {
  title: 'Molecules/Hero/HeroInfo/TextBlock/Title',
  component: Title,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Title
    align='flex-start'
    className='title'
    title='Title of the title'
  />
)
