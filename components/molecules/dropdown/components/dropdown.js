/**
 * Dropdown
 */

import React, { useState } from 'react'

import { node, object, string, array } from 'prop-types'

import styled from 'styled-components'

import { DropdownMenu } from '../../'
import { Button, Icon } from '../../../'

export const Dropdown = ({ children, className, items, position, style, title }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledDropdown className={className} style={style}>
      <Button onClick={() => setOpen(!open)}>{title} <Icon aria-hidden="true" context="info" icon='caret-down' /></Button>
      {open && (children || <DropdownMenu items={items} position={position} />)}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
`

Dropdown.propTypes = {
  children: node,
  className: string,
  items: array,
  position: string,
  style: object
}
