/**
 * Image
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Image } from './'
import Readme from './README.md'

storiesOf('Atoms/Image', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Image alt='Ian Warner' src='http://via.placeholder.com/350x150' />
  )
