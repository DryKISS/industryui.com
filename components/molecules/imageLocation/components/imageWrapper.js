/**
 * Image Location
 */

// React
import React, { useState, useRef } from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Image, ImageMarker, ResizeDetector } from '../../../'

let imageHeight = 0
let imageWidth = 0

export const ImageWrapper = ({ coordinates, item, markerStyles, setCoordinates }) => {
  const containerRef = useRef()
  const [MarkerCoordinates, setMarkerCoordinates] = useState(coordinates)

  const handleImageClick = event => {
    const coordinates = {
      x: (event.nativeEvent.offsetX * 100) / imageWidth,
      y: (event.nativeEvent.offsetY * 100) / imageHeight
    }
    setCoordinates(coordinates)
    setMarkerCoordinates(co => coordinates)
  }

  const newImageSize = () => {
    const { current: container } = containerRef
    imageWidth = container.clientWidth
    imageHeight = container.clientHeight
  }

  return (
    <StyledImageWrapper>
      <ResizeDetector
        onResize={() => {
          if (MarkerCoordinates) {
            newImageSize()
          }
        }}
      />
      <Image
        onLoad={newImageSize}
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
