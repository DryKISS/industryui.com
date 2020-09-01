/**
 * Hooks  - useGeoCoder
 */

// React
import { useEffect, useState } from 'react'

// Services
import { GeoCoder } from '../'

export const useGeoCoder = ({ address, apiKey, city, language, region }) => {
  const [coordinates, setCoordinates] = useState({ lat: '', lng: '' })

  useEffect(() => {
    const getCoordinates = async () => {
      const geo = new GeoCoder({
        apiKey,
        language,
        region
      })

      const coordinates = await geo.fromAddress({ address, city })
      setCoordinates(coordinates)
    }
    getCoordinates()
  }, [])

  return coordinates
}
