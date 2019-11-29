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

export const main = () => {
  const center = 'London'
  const coventGardenPostCode = 'WC2E 9DD'
  const westminsterAbbeyPostCode = 'SW1A'
  const size = '600x600'
  const paths = [
    {
      color: '0x003753',
      geodesic: true,
      weight: '5',
      points: [coventGardenPostCode, westminsterAbbeyPostCode]
    }
  ]

  return (
    <Location
      apiKey='AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
      center={center}
      size={size}
      paths={paths}
      markers={[coventGardenPostCode, westminsterAbbeyPostCode]}
    />
  )
}

export const coventGarden = () => {
  const coventGardenPostCode = 'WC2E 9DD'
  const size = '600x600'

  return (
    <Location
      apiKey='AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
      center={coventGardenPostCode}
      size={size}
      location={coventGardenPostCode}
    />
  )
}

export const westminsterAbbey = () => {
  const westminsterAbbeyPostCode = 'SW1A'
  const size = '600x600'

  return (
    <Location
      apiKey='AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
      center={westminsterAbbeyPostCode}
      size={size}
      location={westminsterAbbeyPostCode}
    />
  )
}
