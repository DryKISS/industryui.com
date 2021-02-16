/**
 * Image Location
 */

// React
import { useEffect, useState } from 'react'

// Style
import styled from 'styled-components'

// UI
import { ImageWrapper } from '../../'
import { ImageLocationProps } from './props'

export const ImageLocation = ({
  coordinatesChange,
  customIcon,
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
      {item?.filename && (
        <ImageWrapper
          customIcon={customIcon}
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

ImageLocation.propTypes = ImageLocationProps

ImageLocation.defaultProps = {
  show: true
}
