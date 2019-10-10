/**
 * Dropdown
 */

import React, { useEffect, useRef, useState } from 'react'

import { array, bool, node, string } from 'prop-types'

import styled from 'styled-components'

import { DropdownMenu, Icon } from '../../../'

export const Dropdown = ({ children, items, position, caret }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  const handleClickAway = event => {
    if (node.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickAway)
    } else {
      document.removeEventListener('mousedown', handleClickAway)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [open])

  return (
    <StyledDropdown ref={node}>
      <StyledToggle onClick={() => setOpen(!open)}>
        {children}
        {caret && <Icon aria-hidden='true' context='info' icon='caret-down' />}
      </StyledToggle>
      {open && <DropdownMenu closeDropdown={() => setOpen(false)} items={items} position={position} />}
    </StyledDropdown>
  )
}

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
`

const StyledToggle = styled.div`
  color: ${props => props.theme.NAVBAR.colourActive};
  cursor: pointer;
  display: inline-block;
  font-family: ${props => props.theme.TYPOGRAPHY.font};
  font-weight: bold;
  line-height: 1.5;
  text-decoration: none;
`

Dropdown.propTypes = {
  caret: bool,
  children: node.isRequired,
  items: array.isRequired,
  position: string
}
