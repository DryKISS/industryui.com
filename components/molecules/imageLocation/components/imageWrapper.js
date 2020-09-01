/**
 * Image Location
 */

// React
import React from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Image } from '../../../'
import { ImageMarker } from '../../'

export const ImageWrapper = ({ coordinates, item, setCoordinates, markerStyles }) => {
  const handleImageClick = event => {
    const rect = event.target.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top

    const coordinates = {
      x: offsetX,
      y: offsetY
    }

    setCoordinates(coordinates)
  }

  return (
    <StyledImageWrapper onClick={handleImageClick}>
      {item.filename && (
        <>
          <Image alt={item.name} src={item.filename} />
          <ImageMarker key={item.id} styles={markerStyles} coordinates={coordinates} />
        </>
      )}
    </StyledImageWrapper>
  )
}

const StyledImageWrapper = styled.div`
  display: inline-block;
  position: relative;

  img {
    max-width: none;
  }
`

ImageWrapper.propTypes = {
  coordinates: object,
  item: object.isRequired,
  setCoordinates: func.isRequired
}
