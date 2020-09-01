/**
 * Image Location
 */

// React
import React from 'react'
import { object } from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import { Icon } from 'components'

// FontAwesome

export const Marker = ({ coordinates, styles }) => {
  return (
    <>
      {styles?.shape ? (
        <StyledIcon
          icon={styles?.shape?.icon}
          prefix={styles?.shape?.prefix}
          size='lg'
          context='primary'
          pull='left'
          styles={styles}
          coordinates={coordinates}
        />
      ) : (
        <StyledMarker styles={styles} coordinates={coordinates} />
      )}
    </>
  )
}

const blinker = keyframes`
    50% {
    opacity: 0;
  }`

const StyledIcon = styled(Icon)`
  color: ${({ styles }) => (styles?.color ? styles?.color : 'red')};
  position: absolute;
  background-color: white;
  animation: ${({ styles }) =>
    styles?.animation === 'blinker'
      ? css`
          ${blinker} 1s ease-in-out infinite forwards
        `
      : ''};
  ${({ coordinates }) =>
    coordinates &&
    `
    display: block;
    left: ${coordinates.x}px;
    top: ${coordinates.y}px;
  `}
`

const StyledMarker = styled.div`
  animation: ${({ styles }) =>
    styles?.animation === 'blinker'
      ? css`
          ${blinker} 1s ease-in-out infinite forwards
        `
      : ''};

  display: none;
  height: ${({ styles }) => (styles?.height ? styles.height : '15px')};
  border-radius: ${({ styles }) => (styles?.borderRadius ? styles.borderRadius : '50%')};

  width: ${({ styles }) => (styles?.width ? styles.width : '15px')};
  position: absolute;
  background-color: ${({ styles }) => (styles?.color ? styles.color : 'red')};
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

Marker.defaultProps = {
  styles: {
    color: 'red',
    animation: '',
    height: '20px',
    width: '20px',
    borderRadius: '50%',
    shape: ''
  }
}
