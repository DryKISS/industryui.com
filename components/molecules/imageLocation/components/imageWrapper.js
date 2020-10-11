/**
 * Image Location
 */

// React
import { useRef, useState } from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Image, ImageMarker } from '../../../'

let imageHeight = 0
let imageWidth = 0

export const ImageWrapper = ({ coordinates, item, markerStyles, setCoordinates }) => {
  const imageRef = useRef()

  const [MarkerCoordinates, setMarkerCoordinates] = useState(coordinates)

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

  return (
    <StyledImageWrapper>
      <Image ref={imageRef} onClick={handleImageClick} alt={item.name} fluid src={item.filename} />
      {MarkerCoordinates?.x && (
        <ImageMarker coordinates={MarkerCoordinates} key={item.id} styles={markerStyles} />
      )}
    </StyledImageWrapper>
  )
}

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
