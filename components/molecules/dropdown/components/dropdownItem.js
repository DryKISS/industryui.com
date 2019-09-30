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

`

DropdownItem.propTypes = {
  item: object
}
