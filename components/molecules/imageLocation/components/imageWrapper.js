/**
 * Image Location
 */

// React
import React, { useState, useRef } from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Image, ImageMarker } from '../../../'
import ResizeDetector from './resizeDetector'

let imageHeight = 0
let imageWidth = 0

const calculateMarkerPlace = coordinates => {
  return { x: (coordinates.x * imageWidth) / 100, y: (coordinates.y * imageHeight) / 100 }
}

export const ImageWrapper = ({ coordinates, item, markerStyles, setCoordinates }) => {
  const containerRef = useRef()
  const [MarkerCoordinates, setMarkerCoordinates] = useState()

  const handleImageClick = event => {
    const coordinates = {
      x: (event.nativeEvent.offsetX * 100) / imageWidth,
      y: (event.nativeEvent.offsetY * 100) / imageHeight
    }
    setCoordinates(coordinates)
    setMarkerCoordinates(co => calculateMarkerPlace(coordinates))
  }

  const drawMarker = () => {
    const { current: container } = containerRef
    imageWidth = container.clientWidth
    imageHeight = container.clientHeight
    if (coordinates) {
      setMarkerCoordinates(co => calculateMarkerPlace(coordinates))
    }
  }

  return (
    <StyledImageWrapper>
      <ResizeDetector
        onResize={() => {
          if (MarkerCoordinates) {
            drawMarker()
          }
        }}
      />
      <Image
        onLoad={drawMarker}
        ref={containerRef}
        onClick={handleImageClick}
        alt={item.name}
        src={item.filename}
        fluid
      />
      {MarkerCoordinates?.x && (
        <ImageMarker coordinates={MarkerCoordinates} key={item.id} styles={markerStyles} />
      )}
    </StyledImageWrapper>
  )
}

const StyledImageWrapper = styled.div`
  display: inline-block;
  position: relative;
`

ImageWrapper.propTypes = {
  coordinates: object,
  item: object.isRequired,
  setCoordinates: func.isRequired
}
