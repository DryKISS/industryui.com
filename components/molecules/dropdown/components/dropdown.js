/**
 * Dropdown
 */

import React, { useEffect, useRef, useState } from 'react'

import { array, bool, node, string } from 'prop-types'

import styled from 'styled-components'

import { DropdownMenu } from '../../'
import { Icon } from '../../../'

export const Dropdown = ({ children, items, position, caret }) => {
  const [open, setOpen] = useState(false)
  const node = useRef();

  const handleClickAway = event => {
    if (node.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickAway);
    } else {
      document.removeEventListener("mousedown", handleClickAway);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, [open]);

  return (
    <StyledDropdown ref={node}>
      <StyledToggle onClick={() => setOpen(!open)}>
        {children}
        {caret && <Icon aria-hidden="true" context="info" icon='caret-down' />}
      </StyledToggle>
      {open && <DropdownMenu closeDropdown={() => setOpen(false)} items={items} position={position} />}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
`

const StyledToggle = styled.div`
  display: inline-block;
  cursor: pointer;
`

Dropdown.propTypes = {
  caret: bool,
  children: node.isRequired,
  items: array.isRequired,
  position: string
}
