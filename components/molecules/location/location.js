/**
 * Location
 * Showcases a static map based on a location
 */

// React
import { useState, useEffect } from 'react'
import { array, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// Services
import { StaticMap } from '../../'

export const Location = ({
  apiKey,
  center,
  channel,
  client,
  format,
  language,
  location,
  maptype,
  markers,
  paths,
  region,
  scale,
  signature,
  size,
  style,
  visible,
  zoom
}) => {
  const [width, height] = size.split('x')
  const [mapUrl, setMapUrl] = useState('')

  // on mount
  useEffect(() => {
    const map = new StaticMap({
      apiKey,
      center,
      channel,
      client,
      format,
      language,
      location,
      maptype,
      markers,
      paths,
      region,
      scale,
      signature,
      size,
      // style,
      visible,
      zoom
    })

    const mapUrl = map.generateUrl()
    setMapUrl(mapUrl)
  }, [])

  return <img alt='map' height={height} src={mapUrl} style={style} width={width} />
}

Location.propTypes = {
  apiKey: string.isRequired,
  center: string,
  channel: string,
  client: string,
  format: oneOf(['png', 'png8', 'png32', 'gif', 'jpg', 'jpg-baseline']),
  language: string,
  location: string,
  maptype: oneOf(['roadmap', 'satellite', 'terrain', 'hybrid']),
  markers: array,
  paths: array,
  region: string,
  scale: oneOf([1, 2, 4, '1', '2', '4']),
  signature: string,
  size: string.isRequired,
  style: objectOf(oneOfType([number, string])),
  visible: string,
  zoom: number
}

Location.defaultProps = {
  format: 'png',
  maptype: 'roadmap',
  scale: 1,
  size: '400x200',
  zoom: 15
}
