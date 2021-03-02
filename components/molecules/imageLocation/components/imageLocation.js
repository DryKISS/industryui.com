/**
 * Image Location
 */

// React
import React, { useEffect, useState } from 'react'

// Style
import styled from 'styled-components'

// UI
import { ImageWrapper } from '../../'
import { ImageLocationProps } from './props'

export const ImageLocation = ({
  autoCloseMarkerPopup,
  coordinatesChange,
  customIcon,
  initialCoordinates,
  initialZoomLevel,
  item,
  markers,
  markerStyles,
  maxZoomLevel,
  onMarkerClick,
  show
}) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates)

  useEffect(() => {
    coordinatesChange &&
      item &&
      coordinates &&
      coordinatesChange({ coordinates, item })
  }, [coordinates])

  return (
    <StyledImageLocation show={show}>
      {item?.filename && (
        <ImageWrapper
          {...{
            autoCloseMarkerPopup,
            coordinates,
            customIcon,
            initialZoomLevel,
            item,
            markers,
            markerStyles,
            maxZoomLevel,
            onMarkerClick,
            setCoordinates
          }}
        />
      )}
    </StyledImageLocation>
  )
}

const StyledImageLocation = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  overflow-x: auto;
`

ImageLocation.propTypes = ImageLocationProps

ImageLocation.defaultProps = {
  show: true
}
