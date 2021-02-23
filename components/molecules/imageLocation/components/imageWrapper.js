/**
 * Image Location
 */

// React
import React, { useRef, useState } from 'react'
import { renderToString } from 'react-dom/server'

import { func, object } from 'prop-types'

import styled from 'styled-components'
import L from 'leaflet'
import { ImageOverlay, MapContainer, Marker } from 'react-leaflet'
// UI
import { Icon, Image, ImageMarker } from '../../../'

let imageHeight = 0
let imageWidth = 0

export const ImageWrapper = ({
  coordinates,
  customIcon,
  item,
  markers,
  markerStyles,
  setCoordinates
}) => {
  const imageRef = useRef()
  const markersArray = useRef([])

  const [MarkerCoordinates, setMarkerCoordinates] = useState(coordinates)
  const [imageDimentions, setImageDimentions] = useState({ height: 0, width: 0 })
  const bounds = [
    [imageDimentions.height, 0],
    [0, imageDimentions.width]
  ]

  const handleImageClick = event => {
    const { current: image } = imageRef

    imageWidth = image.clientWidth

    imageHeight = image.clientHeight

    const coordinates = {
      x: (event.nativeEvent.offsetX * 100) / imageWidth,
      y: (event.nativeEvent.offsetY * 100) / imageHeight
    }

    setCoordinates(coordinates)

    setMarkerCoordinates(co => coordinates)
  }

  const handleLoad = () => {
    const { current: image } = imageRef

    imageWidth = image.clientWidth
    imageHeight = image.clientHeight
    markersArray.current = markers.map((item, i) => {
      let { colour, context, icon, iui, x, y } = item

      x = (x * imageWidth) / 100
      y = (y * imageHeight) / 100

      if (iui !== false) {
        iui = true
      }

      if (!colour) {
        colour = 'red'
      }

      const iconToRender =<Icon {...{ icon, colour, context }} />

      const leafletIcon = L.divIcon({
        className: 'marker-icon',
        html: renderToString(iconToRender)
      })

      return <Marker key={i} position={[x, y]} icon={leafletIcon} />
    })

    setImageDimentions({ height: imageHeight, width: imageWidth })
  }

  if (markers) {
    return (
      <Wrapper>
        <HiddenMapImage
          ref={imageRef}
          alt={item.name}
          fluid
          src={item.filename}
          onLoad={handleLoad}
        />

        {imageDimentions.width !== 0 && (
          <MapContainer
            crs={L.CRS.Simple}
            bounds={bounds}
            maxZoom={5}
            // scrollWheelZoom={false}
            // onzoomstart={e => console.log(e)}
            attributionControl={false}
          >
            {markersArray.current}
            <ImageOverlay url={item.filename} bounds={bounds} />
          </MapContainer>
        )}
      </Wrapper>
    )
  }

  return (
    <StyledImageWrapper>
      <Image ref={imageRef} onClick={handleImageClick} alt={item.name} fluid src={item.filename} />
      {MarkerCoordinates?.x && (
        <ImageMarker
          {...{ customIcon }}
          coordinates={MarkerCoordinates}
          key={item.id}
          styles={markerStyles}
        />
      )}
    </StyledImageWrapper>
  )
}

const Wrapper = styled.div`
  .leaflet-container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
const HiddenMapImage = styled(Image)`
  opacity: 0;
  pointer-events: none;
`
const StyledImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  ${Image} {
    width: 100%;
  }
`

ImageWrapper.propTypes = {
  coordinates: object,
  item: object.isRequired,
  setCoordinates: func.isRequired
}
