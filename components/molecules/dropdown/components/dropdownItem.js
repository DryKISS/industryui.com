/**
 * Dropdown
 */

import React from 'react'

import { object, node } from 'prop-types'

import styled from 'styled-components'

// UI
import { Link } from '../../../'

const renderLink = ({id, name, onClick, to}, closeDropdown) => {

  const handleClick = () => {
    closeDropdown();
    onClick && onClick();
  }

  return (
    <Link to={to} passHref>
      <StyledLink id={id} onClick={handleClick}>{name}</StyledLink>
    </Link>
  )
}

export const DropdownItem = ({ closeDropdown, item }) => {
  return (
    <StyledDropdownItem divider={item.divider}>
      {
        item.divider ? <StyledDivider /> : renderLink(item, closeDropdown)
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

const StyledLink = styled.a`
  color: ${props => props.theme.NAVBAR.colourActive};
  display: block;
  font-family: ${props => props.theme.TYPOGRAPHY.font};
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.NAVBAR.colourHover};
  }
`

DropdownItem.propTypes = {
  children: node,
  item: object
}
