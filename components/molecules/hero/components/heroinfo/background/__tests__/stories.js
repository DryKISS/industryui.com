/**
 * HeroInfo/BackgroundImage
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { BackgroundImage } from '../'
import Readme from '../../../../README.md'

const Height = story => {
  return <div style={{ height: '500px' }}>{story()}</div>
}

export default {
  title: 'Molecules/Hero/HeroInfo/Background',
  component: BackgroundImage,
  decorators: [Height, Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BackgroundImage />
