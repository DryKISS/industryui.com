/**
 * Dropdown
 */

import React from 'react'

import { object, node } from 'prop-types'

import styled from 'styled-components'

export const DropdownItem = ({ children, item }) => {
  return (
    <StyledDropdownItem divider={item.divider}>
      {
        item.divider ? <StyledDivider /> : children || item.name
      }
    </StyledDropdownItem>
  );
};

const StyledDropdownItem = styled.div`
  padding: .25rem 1.5rem;
  white-space: nowrap;

  ${({ divider }) => divider && `
    padding: 0;
  `}
`

const StyledDivider = styled.div`
  height: 0;
  margin: .5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`

DropdownItem.propTypes = {
  children: node,
  item: object
}
