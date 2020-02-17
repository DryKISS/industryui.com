import React from 'react'
import { any } from 'prop-types'
import styled from 'styled-components'

export const PageLoading = ({ children, indicator, ...props }) => {
  return <StyledLoading {...props}>{indicator || children}</StyledLoading>
}

PageLoading.propTypes = {
  children: any,
  indicator: any
}

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`
