/**
 * Dropdown
 */

import React from 'react'

import { node, object, string, array } from 'prop-types'

import styled from 'styled-components'

import { DropdownMenu } from '../../'

export const Dropdown = ({ children, className, items, style, title }) => {
  return (
    <StyledDropdown className={className} style={style}>
      {title}
      {children || <DropdownMenu items={items} />}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`

`

Dropdown.propTypes = {
  children: node,
  className: string,
  items: array,
  style: object
}
