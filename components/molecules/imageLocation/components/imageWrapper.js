/**
 * Image Location
 */

// React
import React, { useState, useEffect } from 'react'
import { func, object } from 'prop-types'

import styled from 'styled-components'

// UI
import { Image } from '../../../'
import { Dot } from '../../'

export const ImageWrapper = ({ change, item }) => {
  const [position, setPosition] = useState(null)

  const handleImageClick = (event) => {
    const rect = event.target.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top

    const coordinates = {
      x: offsetX,
      y: offsetY
    }

    setPosition(coordinates)

    change({
      item,
      position: coordinates
    })
  }

  useEffect(() => {
    setPosition(null)
  }, [item])

  return (
    <StyledImageWrapper onClick={handleImageClick}>
      {item.image &&
        <>
          <Image alt={item.text} src={item.image} />
          <Dot key={item.id} position={position} />
        </>}
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
  change: func.isRequired,
  item: object.isRequired
}
