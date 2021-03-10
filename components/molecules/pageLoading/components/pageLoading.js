/**
 * Page Loading
 */

// React
import React from 'react'
import { any, number, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const PageLoading = ({ children, dataCy, indicator, ...props }) => {
  return (
    <StyledLoading data-cy={dataCy} {...props}>
      {indicator || children}
    </StyledLoading>
  )
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

PageLoading.propTypes = {
  backgroundColor: string,
  children: any,
  dataCy: string,
  indicator: any,
  opacity: number,
  position: string,
}

PageLoading.defaultProps = {
  backgroundColor: '#fff',
  dataCy: 'loadingIndicator',
  opacity: 1,
  position: 'fixed',
}
