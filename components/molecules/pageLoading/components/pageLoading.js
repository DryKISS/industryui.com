import React from 'react'
import { any, number, string } from 'prop-types'
import styled from 'styled-components'

export const PageLoading = ({ children, indicator, ...props }) => {
  return <StyledLoading {...props}>{indicator || children}</StyledLoading>
}

PageLoading.propTypes = {
  backgroundColor: string,
  children: any,
  indicator: any,
  opacity: number,
  position: string
}

PageLoading.defaultProps = {
  backgroundColor: '#000',
  opacity: 0.5,
  position: 'fixed'
}

const StyledLoading = styled.div`
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: ${({ opacity }) => opacity};
  position: ${({ position }) => position};
  right: 0;
  top: 0;
  width: 100%;
  z-index: 99;
`
