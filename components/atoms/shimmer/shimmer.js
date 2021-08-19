/**
 * Shimmer
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// Style
import styled, { css, keyframes } from 'styled-components'

// UI
import shadeColor from '../../utils/colour/shadeColor'

const Shimmer = ({ duration, height, hexColour, width }) => {
  return <StyledShimmer duration={duration} height={height} hexColour={hexColour} width={width} />
}

const placeholderShimmer = keyframes`
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
`
const defaultColour = '#f6f7f8'

const StyledShimmer = styled.div`
  animation-duration: ${({ duration }) => (duration ? duration + 'ms' : '1s')};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeholderShimmer};
  animation-timing-function: linear;

  ${({ hexColour }) => {
    return css`
      background: ${hexColour ?? defaultColour};
      background-image: linear-gradient(
        to right,
        ${hexColour ?? defaultColour} 0%,
        ${shadeColor(hexColour ?? defaultColour, -8)} 20%,
        ${hexColour ?? defaultColour} 40%,
        ${hexColour ?? defaultColour} 100%
      );
    `
  }}

  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  height: ${({ height }) => height ?? '100%'};
  position: relative;
  width: ${({ width }) => width ?? '100%'};
`
Shimmer.propTypes = {
  duration: number,
  height: string,
  hexColour: string,
  width: string
}

export default Shimmer
