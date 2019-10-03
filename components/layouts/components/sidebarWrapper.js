/**
 * Sidebar Wrapper
 */

import React from 'react'

import { node, object, string } from 'prop-types'

import styled from 'styled-components'

export const SidebarWrapper = ({ children, className, style }) => {
  return (
    <StyledSidebarWrapper className={className} style={style}>
      {children}
    </StyledSidebarWrapper>
  )
}

const StyledSidebarWrapper = styled.aside`
  align-self: stretch;
  flex: 0 0 250px;
  padding: 20px 10px;
`

SidebarWrapper.propTypes = {
  children: node.isRequired,
  className: string,
  style: object
}
