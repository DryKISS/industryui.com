/**
 * Image Location
 */

 // React
import React, { useState, useEffect } from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Dot } from '../../'

export const ImageWrapper = ({ property, floor, change }) => {

  const [position, setPosition] = useState(null);

  const handleImageClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const coordinates = {
      x: offsetX,
      y: offsetY
    }

    setPosition(coordinates);

    change({
      property: {
        id: property.id,
        name: property.name
      },
      floor: {
        id: floor.id,
        name: floor.name
      },
      position: coordinates
    })
  }

  useEffect(() => {
    setPosition(null);
  }, [floor])

  return (
    <StyledImageWrapper onClick={handleImageClick}>
      <img src={floor.image} />
      <Dot key={floor.id} position={position} />
    </StyledImageWrapper>
  )
}

const StyledImageWrapper = styled.div`
  display: inline-block;
  position: relative;
`

ImageWrapper.propTypes = {
  change: func.isRequired,
  floor: object.isRequired
}