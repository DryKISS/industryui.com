/**
 * Image Location
 */

// React
import React, { useEffect, useState } from 'react'
import { bool, func, string, object } from 'prop-types'

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
  overflow-x: auto;
  display: ${({ show }) => (show ? 'block' : 'none')};
`

ImageLocation.propTypes = {
  className: string,
  initialCoordinates: object,
  markerStyles: object,
  coordinatesChange: func,
  item: object,
  style: object,
  show: bool
}

ImageLocation.defaultProps = {
  show: true
}
