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
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ opacity }) => opacity};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`
