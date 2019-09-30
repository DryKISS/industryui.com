/**
 * Dropdown
 */

import React from 'react'

import { object, node } from 'prop-types'

import styled from 'styled-components'

export const DropdownItem = ({ children, item }) => {
  return (
    <StyledDropdownItem>
      {children || item.title}
    </StyledDropdownItem>
  );
};

const StyledDropdownItem = styled.div`
  padding: .25rem 1.5rem;
  white-space: nowrap;
`

DropdownItem.propTypes = {
  children: node,
  item: object
}
