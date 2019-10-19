/**
 * Location
 */

// React
import React from 'react'

// Hero
import { Location } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Location',
  component: Location,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Location apiKey='' location='Wimbledon' />

defaultStory.story = {
  name: 'Default'
}
