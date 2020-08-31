/**
 * Image Location
 */

// React
import React from 'react'
import { object } from 'prop-types'
import styled, { keyframes, css } from 'styled-components'

export const Marker = ({ coordinates, styles }) => {
  return <StyledMarker styles={styles} coordinates={coordinates} />
}

const blinker = keyframes`
    50% {
    opacity: 0;
  }`

const StyledMarker = styled.div`
  animation: ${({ styles }) =>
    styles?.animation === 'blinker'
      ? css`
          ${blinker} 1s ease-in-out infinite forwards
        `
      : ''};

  display: none;
  height: ${({ styles }) => (styles?.height ? styles.height : '10px')};
  border-radius: ${({ styles }) => (styles?.borderRadius ? styles.borderRadius : '50%')};

  width: ${({ styles }) => (styles?.width ? styles.width : '10px')};
  position: absolute;
  background-color: ${({ styles }) => (styles?.background ? styles.background : 'red')};
  ${({ coordinates }) =>
    coordinates &&
    `
    display: block;
    left: ${coordinates.x}px;
    top: ${coordinates.y}px;
  `}
`

Marker.propTypes = {
  coordinates: object,
  styles: object
}
