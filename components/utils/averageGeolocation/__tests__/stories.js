/**
 * Average Geolocation
 */

// React
import React from 'react'

// UI
import { averageGeolocation, Text, Space } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    coordinatesArray: [
      { lat: 51.47, lng: -0.0035 },
      { lat: 52.47, lng: -0.0045 },
      { lat: 12.47, lng: -1.5 }
    ],
    additionalLat: 12.2,
    additionalLng: 13.1
  },
  argTypes: {
    additionalLat: { name: 'Additional Lat' },
    additionalLng: { name: 'Additional Lng' },
    coordinatesArray: { name: 'Coordinates Array' }
  },
  title: 'Utils/AverageGeolocation',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const AverageGeolocation = (args) => {
  const locations = [...args.coordinatesArray, { lat: args.additionalLat, lng: args.additionalLng }]
  return (
    <>
      <Space>
        <Text>Location Array: {JSON.stringify(locations)}</Text>
      </Space>

      <Text>average lat: {averageGeolocation(locations).lat} </Text>
      <Text>average lng: {averageGeolocation(locations).lng} </Text>
    </>
  )
}
