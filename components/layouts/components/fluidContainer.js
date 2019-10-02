/**
 * Fluid Container
 */

import React from 'react'

import { node, object, string } from 'prop-types'

import styled from 'styled-components'

export const FluidContainer = ({ children, className, style }) => {
  return (
    <StyledFluidContainer className={className} style={style}>
      {children}
    </StyledFluidContainer>
  );
};

const StyledFluidContainer = styled.div`
  display: flex;
`

FluidContainer.propTypes = {
  children: node.isRequired,
  className: string,
  style: object
}
