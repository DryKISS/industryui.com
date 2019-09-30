/**
 * Dropdown
 */

import React from 'react'

import { array, node } from 'prop-types'

import styled from 'styled-components'

import { DropdownItem } from '../../'

export const DropdownMenu = ({ children, items }) => {
  return (
    <StyledDropdownMenu>
      {children || items.map(item => {
        return <DropdownItem key={item.title} item={item} />
      })}
    </StyledDropdownMenu>
  );
};

const StyledDropdownMenu = styled.div`
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  left: 0;
  margin-top: 1px;
  min-width: 10rem;
  padding: .5rem 0;
  position: absolute;
  top: 100%;
`

DropdownMenu.propTypes = {
  children: node,
  items: array
}
