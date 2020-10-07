/**
 * Average Geolocation
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { averageGeolocation, Text } from 'components'

export default {
  title: 'Utils/AverageGeolocation',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const AverageGeolocation = () => {
  const locations = [
    { lat: 51.47, lng: -0.0035 },
    { lat: 52.47, lng: -0.0045 },
    { lat: 12.47, lng: -1.5 }
  ]
  return (
    <>
      <Text>locationArray: {JSON.stringify(locations)}</Text>
      <Text>average: {JSON.stringify(averageGeolocation(locations))} </Text>
    </>
  )
}
