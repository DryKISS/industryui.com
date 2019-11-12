/**
 * Static Map
 */

// React
import React from 'react'

// UI
import { GoogleMapsStatic, GoogleMapsStaticPath } from './'
import Readme from './README.md'

export default {
  title: 'Atoms/Google/Static Map',
  component: GoogleMapsStatic,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <GoogleMapsStatic size='600x600' apiKey=''>
    <GoogleMapsStaticPath
      color='0xff0000ff'
      weight='5'
      points={[
        { lat: 40.737102, lng: -73.990318 },
        '40.749825,-73.987963',
        { lat: 40.752946, lng: -73.987384 },
        { lat: 40.755823, lng: -73.986397 }
      ]}
    />
  </GoogleMapsStatic>
)
