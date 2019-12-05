/**
 * Location
 */

// React
import React from 'react'

import { DynamicLocation, Marker } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Map/DynamicLocation',
  component: DynamicLocation,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const coventGardenCoordinates = { lat: 51.511749, lng: -0.12219 }
  const westminsterAbbeyCoordinates = { lat: 51.49921, lng: -0.12407 }

  return (
    <DynamicLocation
      apiKey='AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
      defaultCenter={coventGardenCoordinates}
      zoom={13.5}
      width='400px'
    >
      <Marker position={coventGardenCoordinates} />
      <Marker position={westminsterAbbeyCoordinates} />
    </DynamicLocation>
  )
}
