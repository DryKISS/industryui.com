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

// Note: Images are imported here to make sure they are included in the bundle, but they are loaded using /static/media/ urls within property data
import groundFloor from './__resources__/images/ground-floor.png'
import firstFloor from './__resources__/images/first-floor.png'
import secondFloor from './__resources__/images/second-floor.png'
import thirdFloor from './__resources__/images/third-floor.png'
import fourthFloor from './__resources__/images/fourth-floor.png'

storiesOf('Molecules/ImageLocation', module)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () => (
    <ImageLocation properties={Properties}></ImageLocation>
  ))

