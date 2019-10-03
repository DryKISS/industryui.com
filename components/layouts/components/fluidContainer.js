/**
 * Fluid Container
 */

import React from 'react'

import { node, object, string } from 'prop-types'

import styled from 'styled-components'

// UI
import { MEDIA_QUERY } from '../../'

export const FluidContainer = ({ children, className, style }) => {
  return (
    <StyledFluidContainer className={className} style={style}>
      {children}
    </StyledFluidContainer>
  );
};

const StyledFluidContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.tablet`
    flex-direction: row;
  `}
`

FluidContainer.propTypes = {
  children: node.isRequired,
  className: string,
  style: object
}
