/**
 * Marker
 */

import { LazyIcon } from 'components/icons'
import { object } from 'prop-types'

// Style
import styled, { css, keyframes } from 'styled-components'

// UI
import { Icon } from '../../../'

export const ImageMarker = ({ coordinates, customIcon, styles }) => {
  if (customIcon) {
    return (
      <CustomIconWrapper {...{ coordinates, styles }}>
        <LazyIcon iconName={customIcon} />
      </CustomIconWrapper>
    )
  }
  return styles?.shape ? (
    <StyledIcon
      context='primary'
      icon={styles?.shape?.icon}
      prefix={styles?.shape?.prefix}
      pull='left'
      size='lg'
      {...{ coordinates, styles }}
    />
  ) : (
    <StyledMarker {...{ coordinates, styles }} />
  )
}
const blinker = keyframes`
    50% {
    opacity: 0;
  }`

const commonMarkerCss = css`
  animation: ${({ styles }) =>
    styles?.animation === 'blinker'
      ? css`
          ${blinker} 1s ease-in-out infinite forwards
        `
      : ''};
  margin-left: ${({ styles }) =>
    '-' + (styles?.width ? Number(styles.width.replace('px', '') / 2) + 'px' : '7px')};
  margin-top: ${({ styles }) =>
    '-' + (styles?.height ? Number(styles.height.replace('px', '') / 2) + 'px' : '7px')};
  pointer-events: none;
  position: absolute;
  transition-duration: 0.2s;
  transition-property: left, top;

  ${({ coordinates }) =>
    coordinates &&
    css`
      display: block;
      left: ${coordinates.x}%;
      top: ${coordinates.y}%;
    `}
`
const CustomIconWrapper = styled.div`
  path {
    fill: ${({ styles }) => (styles?.color ? styles?.color : 'red')} !important;
  }
  ${commonMarkerCss}
`
const StyledIcon = styled(Icon)`
  background-color: white;
  color: ${({ styles }) => (styles?.color ? styles?.color : 'red')};

  ${commonMarkerCss}
`

const StyledMarker = styled.div`
  background-color: ${({ styles }) => (styles?.color ? styles.color : 'red')};
  border-radius: ${({ styles }) => (styles?.borderRadius ? styles.borderRadius : '50%')};
  display: none;
  height: ${({ styles }) => (styles?.height ? styles.height : '15px')};
  width: ${({ styles }) => (styles?.width ? styles.width : '15px')};
  ${commonMarkerCss}
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
