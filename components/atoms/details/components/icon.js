/**
 * Components - Atoms - Details - Components - Icon
 */

// React
import React from 'react'
import { bool, node, number } from 'prop-types'

// Style
import styled from 'styled-components'

const DetailsIcon = ({ animationTime, iconComponent, isOpen }) => {
  return (
    <OpenCloseWrapper isOpen={isOpen} animationTime={animationTime}>
      {iconComponent ?? <CaretRight />}
    </OpenCloseWrapper>
  )
}

const OpenCloseWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-right: 0.75rem;
  transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
  transition-duration: ${({ animationTime }) => (animationTime ?? 300) + 'ms'};
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

const CaretRight = styled.div`
  border-bottom: 5px solid transparent;
  border-left: 5px solid ${({ theme }) => theme.COLOUR.dark};
  border-top: 5px solid transparent;
  height: 0;
  width: 0;
`

DetailsIcon.propTypes = {
  animationTime: number,
  iconComponent: node,
  isOpen: bool
}

DetailsIcon.defaultProps = {
  animationTime: 100,
  isOpen: false
}

export default DetailsIcon
