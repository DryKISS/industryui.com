/**
 * Location
 */

// React
import React from 'react'

// UI
import DynamicLocation from '../dynamicLocation'
import Marker from '../marker'
import Readme from '../README.md'

export default {
  component: DynamicLocation,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Map/DynamicLocation'
}

export const main = () => {
  const coventGardenCoordinates = { lat: 51.511749, lng: -0.12219 }
  const westminsterAbbeyCoordinates = { lat: 51.49921, lng: -0.12407 }

  return (
    <DynamicLocation
      apiKey="AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM"
      defaultCenter={coventGardenCoordinates}
      width="400px"
      zoom={13.5}
    >
      <Marker position={coventGardenCoordinates} />
      <Marker position={westminsterAbbeyCoordinates} />
    </DynamicLocation>
  )
}
