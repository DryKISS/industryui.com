/**
 * Map - Static Location
 * Showcases a static map based on a location
 */

// React
import React, { useState, useEffect } from 'react'
import { array, number, node, object, oneOf, string } from 'prop-types'

// Services
import { StaticMap } from '../../../services/google/static/map'

const StaticLocation = ({
  apiKey,
  center,
  channel,
  className,
  client,
  container: Container = 'img',
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
  styleMap,
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
      style: styleMap,
      visible,
      zoom
    })

    const mapUrl = map.generateUrl()
    setMapUrl(mapUrl)
  }, [])

  return (
    <Container
      className={className}
      width={width}
      height={height}
      src={mapUrl}
      style={style}
      alt="map"
    />
  )
}

StaticLocation.propTypes = {
  apiKey: string.isRequired,
  center: string,
  channel: string,
  className: string,
  client: string,
  container: node,
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
  style: object,
  styleMap: string,
  visible: string,
  zoom: number
}

StaticLocation.defaultProps = {
  format: 'png',
  maptype: 'roadmap',
  scale: 1,
  size: '400x200',
  zoom: 15
}

export default StaticLocation
