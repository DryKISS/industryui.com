/**
 * Image Location
 */

// React
import React, { useEffect, useState } from 'react'
import { bool, func, string, object } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { ImageWrapper } from '../../'

export const ImageLocation = ({
  initialCoordinates,
  coordinatesChange,
  markerStyles,
  item,
  show
}) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates)

  useEffect(() => {
    coordinatesChange && item && coordinatesChange({ coordinates, item })
  }, [coordinates])

  return (
    <StyledImageLocation show={show}>
      {item && (
        <ImageWrapper
          coordinates={coordinates}
          markerStyles={markerStyles}
          item={item}
          setCoordinates={setCoordinates}
        />
      )}
    </StyledImageLocation>
  )
}

const StyledImageLocation = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  overflow-x: auto;
`

ImageLocation.propTypes = {
  className: string,
  coordinatesChange: func,
  initialCoordinates: object,
  item: object,
  markerStyles: object,
  show: bool,
  style: object
}

ImageLocation.defaultProps = {
  show: true
}
