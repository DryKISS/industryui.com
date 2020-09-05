/**
 * Marker
 */

// React
import React from 'react'
import { object } from 'prop-types'

// Style
import styled, { css, keyframes } from 'styled-components'

// UI
import { Icon } from 'components'

export const ImageMarker = ({ coordinates, styles }) => {
  return styles?.shape ? (
    <StyledIcon
      coordinates={coordinates}
      context='primary'
      icon={styles?.shape?.icon}
      prefix={styles?.shape?.prefix}
      pull='left'
      size='lg'
      styles={styles}
    />
  ) : (
    <StyledMarker coordinates={coordinates} styles={styles} />
  )
}

const blinker = keyframes`
    50% {
    opacity: 0;
  }`
const transition = css`
  transition-duration: 0.2s;
  transition-property: left, top;
`
const currection = css`
  margin-left: ${({ styles }) =>
    '-' + (styles?.width ? Number(styles.width.replace('px', '') / 2) + 'px' : '7px')};
  margin-top: ${({ styles }) =>
    '-' + (styles?.height ? Number(styles.height.replace('px', '') / 2) + 'px' : '7px')};
`
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
    css`
      display: block;
      left: ${coordinates.x}%;
      top: ${coordinates.y}%;
    `}
	${currection}
  ${transition}
`

const StyledMarker = styled.div`
  animation: ${({ styles }) =>
    styles?.animation === 'blinker'
      ? css`
          ${blinker} 1s ease-in-out infinite forwards
        `
      : ''};
  background-color: ${({ styles }) => (styles?.color ? styles.color : 'red')};
  border-radius: ${({ styles }) => (styles?.borderRadius ? styles.borderRadius : '50%')};
  display: none;
  ${({ coordinates }) =>
    coordinates &&
    css`
      display: block;
      left: ${coordinates.x}%;
      top: ${coordinates.y}%;
    `}

  height: ${({ styles }) => (styles?.height ? styles.height : '15px')};
  position: absolute;
  width: ${({ styles }) => (styles?.width ? styles.width : '15px')};
	${currection}
  ${transition}
`

ImageMarker.propTypes = {
  coordinates: object,
  styles: object
}

ImageMarker.defaultProps = {
  styles: {
    animation: '',
    borderRadius: '50%',
    color: 'red',
    height: '20px',
    shape: '',
    width: '20px'
  }
}
