/**
 * Content Wrapper
 */

import React from 'react'

import { node, object, string } from 'prop-types'

import styled from 'styled-components'

export const ContentWrapper = ({ children, className, style }) => {
  return (
    <StyledContentWrapper className={className} style={style}>
      {children}
    </StyledContentWrapper>
  );
};

const StyledContentWrapper = styled.div`
  flex: 1 1 100%;
  margin: 0 auto;
  max-width: 1800px;
  overflow: hidden;
  padding: 20px;
`

ContentWrapper.propTypes = {
  children: node.isRequired,
  className: string,
  style: object
}
