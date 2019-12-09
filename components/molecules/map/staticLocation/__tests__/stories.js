/**
 * Map - Static Location
 */

// React
import React from 'react'

import styled from 'styled-components'

// Hero
import { StaticLocation } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Map/StaticLocation',
  component: StaticLocation,
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
    <StaticLocation
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
    <StaticLocation
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
    <StaticLocation
      apiKey='AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
      center={westminsterAbbeyPostCode}
      size={size}
      location={westminsterAbbeyPostCode}
    />
  )
}

const ResponsiveImg = styled.img`
  @media (max-width: 625px) {
    width: 100%;
    height: 100%;
  }
`

export const responsiveWesternCentral = () => {
  const westernCentralPostCode = 'WC2E 9DD'
  const size = '600x600'

  return (
    <StaticLocation
      apiKey='AIzaSyBUzxbbHVhHG57UyGYrTG47eIQ8qF-yiuM'
      center='London'
      container={ResponsiveImg}
      size={size}
      location={westernCentralPostCode}
    />
  )
}
