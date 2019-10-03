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
  background: #001529;
  border-right: 1px solid #eef1f4;
  box-shadow: 0 0 50px -20px rgba(57,55,73,.4);
  flex: 0 0 250px;
  padding: 20px 10px;

  a {
    color: #b8beca;
    line-height: 2;
    &:hover {
      color: #fff;
    }
  }
`

SidebarWrapper.propTypes = {
  children: node.isRequired,
  className: string,
  style: object
}
