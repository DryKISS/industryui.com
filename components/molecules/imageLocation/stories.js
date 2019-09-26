/**
 * Image Location
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { ImageLocation } from '../../'
import Readme from './README.md'

// Data
import { Properties } from './__mocks__/properties'

storiesOf('Molecules/ImageLocation', module)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () => (
    <ImageLocation properties={Properties}></ImageLocation>
  ))

