/**
 * Image Location
 */

// React
import React, { useEffect, useState } from 'react'
import { bool, func, shape, string, number, object } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { ImageWrapper } from '../../'

export const ImageLocation = ({
  coordinatesChange,
  initialCoordinates,
  item,
  markerStyles,
  show
}) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates)

  useEffect(() => {
    coordinatesChange && item && coordinates && coordinatesChange({ coordinates, item })
  }, [coordinates])

  return (
    <StyledImageLocation show={show}>
      {item && item.filename && (
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
  initialCoordinates: shape({
    x: number,
    y: number
  }),
  item: shape({
    filename: string,
    name: string,
    value: number
  }),
  markerStyles: object,
  show: bool,
  style: object
}

ImageLocation.defaultProps = {
  show: true
}
