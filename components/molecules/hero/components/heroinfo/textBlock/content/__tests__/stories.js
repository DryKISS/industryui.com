/**
 * Hero
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Content } from '../components/content'
import Readme from '../../../../../README.md'

export default {
  title: 'Molecules/Hero/HeroInfo/TextBlock/Content',
  component: Content,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Content
    align='center'
    className='content'
    strapline={`
        We are testing this content.
      `}
  />
)
