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

`

DropdownMenu.propTypes = {
  children: node,
  items: array
}
