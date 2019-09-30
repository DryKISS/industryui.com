/**
 * Dropdown
 */

import React from 'react'

import { array, node } from 'prop-types'

import styled from 'styled-components'

import { DropdownItem } from '../../'

export const DropdownMenu = ({ children, items, position }) => {
  return (
    <StyledDropdownMenu position={position}>
      {children || items.map(item => {
        return <DropdownItem key={item.title} item={item} />
      })}
    </StyledDropdownMenu>
  );
};

const StyledDropdownMenu = styled.div`
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  margin-top: 1px;
  min-width: 8rem;
  padding: .5rem 0;
  position: absolute;
  top: 100%;

  ${({ position }) => position && `
    left: ${position == 'right' ? 'auto' : '0'};
    right: ${position == 'right' ? '0' : 'auto'};
  `}
`

DropdownMenu.propTypes = {
  children: node,
  items: array
}
