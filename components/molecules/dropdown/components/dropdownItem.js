/**
 * Dropdown
 */

import React from 'react'

import { object } from 'prop-types'

import styled from 'styled-components'

export const DropdownItem = ({ item }) => {
  return (
    <StyledDropdownItem>
      {item.title}
    </StyledDropdownItem>
  );
};

const StyledDropdownItem = styled.div`
  padding: .25rem 1.5rem;
  white-space: nowrap;
`

DropdownItem.propTypes = {
  item: object
}
