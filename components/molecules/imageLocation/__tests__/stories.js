/**
 * Image Location
 */

// React
import React from 'react'

// Storybook
import { select, withKnobs } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { ImageLocation } from '../../../'
import Readme from '../README.md'

// Data
import { Item } from '../__mocks__/itemFloor'

// Note: Images are imported here to make sure they are included in the bundle,
// but they are loaded using /static/media/ urls within property data
import '../__resources__/images/ground-floor.png'
import '../__resources__/images/first-floor.png'
import '../__resources__/images/second-floor.png'
import '../__resources__/images/third-floor.png'
import '../__resources__/images/fourth-floor.png'

export default {
  title: 'Molecules/ImageLocation',
  component: ImageLocation,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

// TODO: CHeck how to implement here the shape
export const main = () => {
  const markerStylesDefaultProps = {
    color: select(
      'Color',
      {
        Red: 'red',
        Blue: 'blue',
        Green: 'green',
        Orange: 'orange'
      },
      'red'
    ),
    animation: select(
      'Animation',
      {
        NoAnimation: '',
        Blinker: 'blinker'
      },
      'red'
    ),
    height: '20px',
    width: '20px',
    borderRadius: '50%'
    /* shape: {
      icon: 'images',
      prefix: 'fas'
    } */
  }
  return (
    <ImageLocation
      markerStyles={markerStylesDefaultProps}
      locationChange={action('change')}
      coordinatesChange={coordinates => {
        console.info(coordinates)
      }}
      item={Item}
    />
  )
}

export const withCoordinatesStored = () => {
  const initialCoordinates = {
    x: 449,
    y: 454
  }
  return (
    <ImageLocation
      locationChange={action('change')}
      initialCoordinates={initialCoordinates}
      coordinatesChange={coordinates => {
        console.info(coordinates)
      }}
      item={Item}
    />
  )
}
